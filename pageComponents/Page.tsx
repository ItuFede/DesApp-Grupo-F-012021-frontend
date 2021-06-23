/* eslint-disable react/prop-types */
import Head from 'next/head';
import React, { useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { DictionaryContext } from '../contexts/DictionaryContext';
import styles from '../styles/Page.module.css'

export default function Page(props): JSX.Element {
    const dictionaryState = useContext(DictionaryContext)
    
    return (
    <>
        <Head>
            <title>Re-Seña!</title>
            <meta name="description" content={dictionaryState.dictionary.meta.headDescription} />
        </Head>
        <html>
            <Header/>
            <main className={styles.pageWrapper}>
                {props.component}
            </main>
            <Footer/>
        </html>
    </>
    )
}
