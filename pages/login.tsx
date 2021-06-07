import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'
import LoginForm from '../components/LoginForm'
import Header from '../components/Header'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => {
    return {
        submit: {
            marginTop: '2rem',
            color: 'var(--colorPrimary)',
            fontSize: '2rem',
            fontWeight: '900',
            background: 'white',
            border: '0px',
            '&:hover': {
                color: 'var(--colorSecondary)',
                transform: 'scale(1.5)',
            },
        },
    }
});

export default function Login() {
    const classes = useStyles();

    return (
      <div className={styles.container}>
        <Head>
            <title>Re-Seña!</title>
            <meta name="description" content="Puntuá tus películas y series favoritas y encontrá recomendaciones!" />
        </Head>

        <main className={styles.main}>
            <Header />
            <div className={styles.card}>
            <LoginForm/>
          </div>

          <Link href="/">
            <a className={classes.submit}>Volver</a>
          </Link>
        </main>
      </div>
    )
  }
  