import React from 'react'
import styles from '../styles/Meta.module.css'

export default function Header(): JSX.Element {
    return(
      <div className={styles.containerHeadertitle}>
        <a className={styles.headertitle} href="/">
          Re-Seña!
        </a>
        <hr/>
      </div>
    )
}
