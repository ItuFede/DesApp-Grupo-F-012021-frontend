import React from 'react'
import styles from '../styles/Meta.module.css'
import LanguageToggle from './LanguageToggle'

export default function Header(): JSX.Element {
    return(
      <>
      <header className={styles.containerHeadertitle}>
        <div>
          <a className={styles.headertitle} href="/">
            Re-Seña! API
          </a>
        </div>
        <div>
          <LanguageToggle />
        </div>
      </header>
      <hr/>
      </>
    )
}
