import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'
import Header from '../components/Header'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Re-Seña!</title>
        <meta name="description" content="Puntuá tus películas y series favoritas y encontrá recomendaciones!" />
      </Head>

      <main className={styles.main}>
        <Header />

        <p className={styles.description}>
          Sitio en construcción.
        </p>

        <div className={styles.card}>
          <Link href="/login">
            <a>Iniciar sesión</a>
          </Link>

          <Link href="/signup">
            <a>Registrarse</a>
          </Link>
        </div>
      </main>
    </div>
  )
}
