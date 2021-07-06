/* eslint-disable react/prop-types */
import React from 'react'
import styles from '../styles/Notification.module.css'
export default function NotificationCard(props): JSX.Element {
    props.notification.reviewScore = (Math.round(props.notification.reviewScore * 100) / 100).toFixed(1);
    if (isNaN(props.notification.reviewScore)) {
        props.notification.reviewScore = ""
    }
    return(
    <>
        <div className={styles.notificationCard}>
            <div className={styles.notifCardTop}>
                <div className={styles.score}>
                    {props.notification.reviewScore}
                </div>
                <div className={styles.textContainer}>
                    <div className={styles.shortText}>
                        {props.notification.reviewShortText}
                    </div>
                    <div className={styles.longText}>
                        {props.notification.reviewLongText}
                    </div>
                </div>
            </div>
            <div className={styles.notifCardBottom}>
                <div className={styles.movieId}>
                    {props.notification.mediaId}
                </div>
                <div className={styles.author}>
                    {props.notification.author}
                </div>
            </div>
        </div>
    </>
    )
}
