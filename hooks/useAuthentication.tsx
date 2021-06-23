import axios from 'axios'
import { decode } from 'jsonwebtoken'
import { environment } from '../environments/environment'
import { useLocalStorage } from './useLocalStorage'

export default function useAuthentication() {
    const {storageGet, storageSet, storageClear} = useLocalStorage()

    const isAuthenticated = () => {
        const token: string | null = storageGet('access_token')
        const payload = decode(token)
        return (payload?.exp > (Date.now() / 1000)) || false
    }

    const signup = (body) => {
        return axios.post(`${environment.API_URL}auth/register`, body, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    const login = (body) => {
        return axios.post(`${environment.API_URL}auth/login`, body, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => storageSet('access_token', res.data))
    }

    const logOut = () => {
        storageClear()
    }

    const userDataFromToken = () => {
        const token: string | null = storageGet('access_token')
        const payload = decode(token)
        return {
            email: payload.sub,
            platform: 'Netflix',
            apiKey: token
        }
    }
    
    return {
        signup,
        login,
        isAuthenticated,
        logOut,
        userDataFromToken
    }
}
