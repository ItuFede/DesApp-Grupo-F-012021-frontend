import React, { useEffect, useState } from 'react'
import useAuthentication from '../hooks/useAuthentication'
import styles from '../styles/Main.module.css'
import Router from 'next/router';
import { decode } from 'jsonwebtoken'
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function MainPage(): JSX.Element {
    const {logOut, userDataFromToken} = useAuthentication()
    const {storageGet} = useLocalStorage()
    const [userData, setUserData] = useState({email: '', platform: '', platformLogo: '', apiKey: ''})
    const [seconds, setSeconds] = useState(0)
    const [counter, setCounter] = useState(0)

    // useEffect(() => {
    //     const user: any = userDataFromToken()
    //     user.platformLogo = 'Netflix' 
    //     setUserData(user)
    //     setInterval(() => {

    //         setApiKeyExp({expiration: hours: (ms / (1000 * 60 * 60)).toFixed(1), minutes: (ms / (1000 * 60)).toFixed(1), seconds: (ms / 1000).toFixed(1) })
    //         setCounter(Date.now())
    //     }, 1000);
    // }, [])

    // useEffect(() => {
    //     console.log('updatedTime')
        // const token: string | null = storageGet('access_token')
    //     if (userData.apiKey) {
    //         const payload = decode(userData.apiKey)
    //         const ms = payload?.exp
    //         setSeconds(ms)
    //     }
    // }, [counter])

    const logOutAndRedirect = () => {
        logOut()
        Router.push('/')
    }

    const openDocumentation = () => {
        console.log('wip swagger')
    }
    const [apiKeyExp, setApiKeyExp] = useState({expiration: 0, minutes: '0', seconds: '0', hours: '0'})

    return(
        <div className={styles.mainPageWrapper}>
            <div className={styles.userCard}>
                <h1 className={styles.userCardHeader}>{userData.email} - {userData.platformLogo} {userData.platform}</h1>
                <hr />
                <div className={styles.apiKeyBox}><h2>{userData.apiKey} - copiar al portapapeles</h2></div>
                <hr />
                {/* Tiempo restante: {apiKeyExp.hours}:{apiKeyExp.minutes}:{apiKeyExp.seconds} - obtener una Api Key nueva (button) */}
            </div>
            <h2>{seconds}</h2>
            <h2 onClick={() => openDocumentation()} className={styles.link}>Documentación de la API</h2> 
            <h2 onClick={() => Router.push('/notifications')} className={styles.link}>Notificaciones</h2> 
            <h2 onClick={() => Router.push('/metrics')} className={styles.link}>Métricas</h2> 
            <h2 onClick={() => logOutAndRedirect()} className={styles.logout}>Cerrar sesión</h2> 
        </div>
    )
}
