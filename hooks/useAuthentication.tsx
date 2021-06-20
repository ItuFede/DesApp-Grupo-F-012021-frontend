import { decode } from 'jsonwebtoken'

export default function useAuthentication(): { isAuthenticated: () => boolean } {
    const isAuthenticated = () => {
        const token: string | null = null
        const payload = decode(token)
        return (payload?.exp > (Date.now() / 1000)) || false
    }
    
    return {
        isAuthenticated
    }
}
