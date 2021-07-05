/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import useFirebase from '../firebase/useFirebase'
import useAuthentication from '../hooks/useAuthentication'

export default function NotificationPage(): JSX.Element {
    const { userDataFromToken } = useAuthentication()
    const [shownNotifications, setShownNotifications] = useState([])
    const [subscribedMedia, setSubscribedMedia] = useState(["ignore this element"])
    const [username, setUsername] = useState(userDataFromToken().email)
    const firebase = useFirebase()

    firebase.firestore().collection('subscriptions')
        .where('username', '==', username || "").get().then((snapshot) => {
            const subscriptions = snapshot.docs.map(doc => doc.data()).map((sub) => sub.mediaId)
            if (subscriptions.length) {
                setSubscribedMedia(subscriptions)
            }
        })

    const notificationsQuery = firebase.firestore()
        .collection('notifications')
        .limit(10)
        .where('mediaId', 'in', subscribedMedia)

    const [notifications]: any = useCollectionData(notificationsQuery, {idField: 'id'})
    
    useEffect(() => {
        if (notifications?.length) {
            setShownNotifications(notifications)
        }
    }, [notifications])

    return(
    <>
        <div>
            {shownNotifications && shownNotifications.map((notif: Notification) => <div>{notif.id} ------ {notif.author} ------ {notif.reviewShortText} ------ {notif.millsTime}</div> )}
        </div>
    </>
    )
}
