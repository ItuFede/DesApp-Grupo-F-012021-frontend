import React, { useContext, useEffect, useState } from 'react'
import useAuthentication from '../hooks/useAuthentication'
import styles from '../styles/Main.module.css'
import Router from 'next/router';
import { faClipboard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Swal from 'sweetalert2';
import PlatformLogo from '../components/PlatformLogo';
import { DictionaryContext } from '../contexts/DictionaryContext';

export default function MainPage(): JSX.Element {
    const {logOut, userDataFromToken} = useAuthentication()
  const dictionaryState = useContext(DictionaryContext)
    const [userData, setUserData] = useState({email: '', platform: '', apiKey: ''})

    useEffect(() => {
        const user: any = userDataFromToken()
        user.platform = 'Netflix' 
        setUserData(user)
    }, [])

    const logOutAndRedirect = () => {
        logOut()
        Router.push('/')
    }

    const openDocumentation = () => {
        console.log('wip swagger')
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(userData.apiKey)
        Swal.fire({
            icon: 'success',
            title: dictionaryState.dictionary.main.userData.clipboardMsgTitle,
            text: dictionaryState.dictionary.main.userData.clipboardMsg,
        });
    }

    return(
        <div className={styles.mainPageWrapper}>
            <div className={styles.userCard}>
                <div className={styles.userCardHeader}>
                <h1>{userData.email} -</h1>
                <PlatformLogo platform={userData.platform} />
                <h1>{userData.platform}</h1>
                </div>
                <div className={styles.apiKeyBox}>
                    <div className={styles.apiKeyTextWrapper}>
                        <p className={styles.apiKeyText}>{userData.apiKey}</p>
                    </div>
                    <div className={styles.copyBtn} onClick={() => copyToClipboard()} title={dictionaryState.dictionary.main.userData.clipboardBtnTitle}>
                        <FontAwesomeIcon icon={faClipboard} />
                    </div>
                </div>
            </div>
            <h2 onClick={() => openDocumentation()} className={styles.link}>{dictionaryState.dictionary.main.documentation}</h2> 
            <h2 onClick={() => Router.push('/notifications')} className={styles.link}>{dictionaryState.dictionary.main.notifications}</h2> 
            <h2 onClick={() => Router.push('/metrics')} className={styles.link}>{dictionaryState.dictionary.main.metrics}</h2> 
            <h2 onClick={() => logOutAndRedirect()} className={styles.logout}>{dictionaryState.dictionary.main.logout}</h2> 
        </div>
    )
}
