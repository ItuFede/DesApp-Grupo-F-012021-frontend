import styles from '../styles/Meta.module.css'
import React from 'react'
import SignUpForm from '../components/SignUpForm'
import Link from 'next/link'
import AuthPage from '../pageComponents/AuthPage'

export default function SignUp() {

    return (
      <AuthPage
        subtitle={<></>}
        component={
          <>
            <div className={styles.card}>
              <SignUpForm/>
            </div>

            <Link href="/">
              <a className={styles.outsideCardBtn}>Volver</a>
            </Link>
          </>
      }/>
    )
  }
