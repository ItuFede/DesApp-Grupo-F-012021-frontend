import React from 'react'
import styles from '../styles/Meta.module.css'

export default function Header(): JSX.Element {
    return(
      <header className={styles.containerHeadertitle}>
        <a className={styles.headertitle} href="/">
          Re-Seña! API
        </a>
        <hr/>
      </header>
    )
}
