import Link from 'next/link'
import React from 'react'
import styles from '../styles/Meta.module.css'
import AuthPage from './AuthPage'

export default function WelcomePage(): JSX.Element {
    return(
        <AuthPage
            subtitle={        
            <p className={styles.authPageSubtitle}>
                ¡Bienvenido! <br />
                ¿Estás preparado para recomendar tus películas y series favoritas a todo el mundo?
            </p>
            }
            component={
            <div className={styles.card}>
                <Link href="/login">
                <a>Iniciar sesión</a>
                </Link>

                <Link href="/signup">
                <a>Registrarse</a>
                </Link>
            </div>
        }/>
    )
}

