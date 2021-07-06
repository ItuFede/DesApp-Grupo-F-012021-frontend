/* eslint-disable react/prop-types */
import Head from 'next/head';
import React, {useContext} from 'react';
import BigHeader from '../components/BigHeader';
import LanguageToggle from '../components/LanguageToggle';
import { DictionaryContext } from '../contexts/DictionaryContext';
import styles from '../styles/Meta.module.css'

export default function AuthPage(props): JSX.Element {
    const dictionaryState = useContext(DictionaryContext)

    return (
    <>
        <Head>
            <title>Re-Seña!</title>
            <meta name="description" content={dictionaryState.dictionary.meta.headDescription} />
        </Head>
        <LanguageToggle />
        <main className={styles.authPageContainer}>
            <BigHeader/>
            {props.subtitle}
            {props.component}
        </main>
    </>
    )
}
