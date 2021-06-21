import axios from 'axios'
import { decode } from 'jsonwebtoken'
import { environment } from '../environments/environment'

export default function useAuthentication() {
    const isAuthenticated = () => {
        const token: string | null = null
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
        })
    }
    
    return {
        signup,
        login,
        isAuthenticated
    }
}
