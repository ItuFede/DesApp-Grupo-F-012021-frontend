/* eslint-disable react/jsx-key */
import React from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import useFirebase from '../firebase/useFirebase'

export default function NotificationPage(): JSX.Element {
    const firebase = useFirebase()
    const query = firebase.firestore().collection('notifications').orderBy('millsTime', 'desc').limit(10)
    const [notifications] = useCollectionData(query, {idField: 'id'})
    
    return(
    <>
        <div>
            {notifications && notifications.map(notif => <div>{notif.id} ------ {notif.author} ------ {notif.reviewShortText} ------ {notif.millsTime}</div> )}
        </div>
    </>
    )
}
