/* eslint-disable react/prop-types */
import Head from 'next/head';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Page(props): JSX.Element {
    return (
    <>
        <Head>
            <title>Re-Seña!</title>
            <meta name="description" content="¡Puntuá tus películas y series favoritas y encontrá recomendaciones!" />
        </Head>
        <main className="page-wrapper">
            <Header/>
            {props.component}
            <Footer/>
        </main>
    </>
    )
}
