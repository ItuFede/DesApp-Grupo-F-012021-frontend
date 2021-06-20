import styles from '../styles/Meta.module.css'
import React from 'react'
import Link from 'next/link'
import AuthPage from '../pageComponents/AuthPage'
import LoginForm from '../components/LoginForm'


export default function Login(): JSX.Element {

    return (
      <AuthPage
        subtitle={<p className={styles.authPageSubtitle}>Iniciar Sesión</p>}
        component={
          <>
            <div className={styles.card}>
              <LoginForm/>
            </div>

            <Link href="/">
              <a className={styles.outsideCardBtn}>Volver</a>
            </Link>
          </>
      }/>
    )
  }
  