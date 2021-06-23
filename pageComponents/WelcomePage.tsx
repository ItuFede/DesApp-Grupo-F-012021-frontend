import Link from 'next/link'
import React, { useContext } from 'react'
import styles from '../styles/Meta.module.css'
import AuthPage from './AuthPage'
import { DictionaryContext } from '../contexts/DictionaryContext'

export default function WelcomePage(): JSX.Element {
    const dictionaryState = useContext(DictionaryContext)

    return(
        <AuthPage
            subtitle={        
            <p className={styles.authPageSubtitle}>
                {dictionaryState.dictionary.welcome.subtitle1}
            </p>
            }
            component={
            <div className={styles.card}>
                <Link href="/login">
                <a>{dictionaryState.dictionary.login.form.submit}</a>
                </Link>

                <Link href="/signup">
                <a>{dictionaryState.dictionary.signup.form.submit}</a>
                </Link>
            </div>
        }/>
    )
}

