/* eslint-disable react/prop-types */
import Head from 'next/head';
import React from 'react';
import BigHeader from '../components/BigHeader';
import styles from '../styles/Meta.module.css'

export default function AuthPage(props): JSX.Element {
    return (
    <>
        <Head>
            <title>Re-Seña!</title>
            <meta name="description" content="¡Puntuá tus películas y series favoritas y encontrá recomendaciones!" />
        </Head>
        <main className={styles.authPageContainer}>
            <BigHeader/>
            {props.subtitle}
            {props.component}
        </main>
    </>
    )
}
