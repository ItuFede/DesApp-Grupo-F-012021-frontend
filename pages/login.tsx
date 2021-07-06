import styles from '../styles/Meta.module.css'
import React, { useContext } from 'react'
import Link from 'next/link'
import AuthPage from '../pageComponents/AuthPage'
import LoginForm from '../components/LoginForm'
import { DictionaryContext } from '../contexts/DictionaryContext'


export default function Login(): JSX.Element {
  const dictionaryState = useContext(DictionaryContext)

    return (
      <AuthPage
        subtitle={<></>}
        component={
          <>
            <div className={styles.card}>
              <LoginForm/>
            </div>

            <Link href="/">
              <a className={styles.outsideCardBtn}>{dictionaryState.dictionary.signup.form.backBtn}</a>
            </Link>
          </>
      }/>
    )
  }
  