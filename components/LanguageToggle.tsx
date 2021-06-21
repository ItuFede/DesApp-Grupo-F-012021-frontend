import React, { useContext, useEffect } from 'react'
import { DictionaryContext } from '../contexts/DictionaryContext'
import { useLocalStorage } from '../hooks/useLocalStorage'
import styles from '../styles/Meta.module.css'

export default function LanguageToggle(): JSX.Element {
    const {storageSet} = useLocalStorage()
    const dictionaryState = useContext(DictionaryContext)

    useEffect(() => {
        storageSet('dictionaryState', JSON.stringify(dictionaryState))
    }, [dictionaryState])

    return(
        <div className={styles.languageToggleContainer}>
            <div 
                onClick={() => dictionaryState.setDictionary('EN_US')} 
                className={styles.englishBtn} 
                title="Change language to English"
            >🇺🇸</div>
            <div 
                onClick={() => dictionaryState.setDictionary('ES_AR')} 
                className={styles.spanishBtn} 
                title="Cambiar lenguaje a Español"
            >🇪🇸</div>
        </div>
    )
}
