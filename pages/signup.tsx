import styles from '../styles/Meta.module.css'
import React from 'react'
import SignUpForm from '../components/SignUpForm'
import Link from 'next/link'
import AuthPage from '../pageComponents/AuthPage'
import { DictionaryContext } from '../contexts/DictionaryContext'
import { useContext } from 'react'

export default function SignUp() {
  const dictionaryState = useContext(DictionaryContext)

    return (
      <AuthPage
        subtitle={<></>}
        component={
          <>
            <div className={styles.card}>
              <SignUpForm/>
            </div>

            <Link href="/">
              <a className={styles.outsideCardBtn}>{dictionaryState.dictionary.signup.form.backBtn}</a>
            </Link>
          </>
      }/>
    )
  }
