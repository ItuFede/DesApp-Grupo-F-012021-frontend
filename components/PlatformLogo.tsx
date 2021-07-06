/* eslint-disable react/prop-types */
import React from 'react'
import styles from '../styles/PlatformLogo.module.css'

export default function PlatformLogo(props): JSX.Element {
   
    return(
        <>
            {props.platform === 'Netflix' && <h1 className={`${styles.platform} ${styles.netflix}`}>N</h1>}
            {props.platform === 'Amazon Prime' && <h1 className={`${styles.platform} ${styles.amazonPrime}`}>prime</h1>}
            {props.platform === 'Disney Plus' && <h1 className={`${styles.platform} ${styles.disneyPlus}`}>Disney+</h1>}
        </>
    )
}
