import React from 'react'
import { useContext } from 'react'
import { DictionaryContext } from '../contexts/DictionaryContext'
import styles from '../styles/Meta.module.css'

export default function Footer(): JSX.Element {
  const dictionaryState = useContext(DictionaryContext)
    return(
      <>
        <hr/>
        <footer className={styles.footerContainer}>
          {dictionaryState.dictionary.footer}
        </footer>
        </>
    )
}
