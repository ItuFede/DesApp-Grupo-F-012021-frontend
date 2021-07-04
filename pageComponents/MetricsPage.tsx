/* eslint-disable react/jsx-key */
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import useFirebase from '../firebase/useFirebase'
import useAuthentication from '../hooks/useAuthentication'
import * as _ from 'lodash';
import { Metric } from '../models/Metric'
import styles from '../styles/SecondaryPages.module.css'

export default function MetricsPage(): JSX.Element {
    const { userDataFromToken } = useAuthentication()
    const [shownMetrics, setShownMetrics] = useState([{log: "...Loading...", username: "", millsTime: 0}])
    const firebase = useFirebase()
    const username = userDataFromToken().email || ""
    const query = firebase.firestore()
        .collection('metrics')
        .limit(25)
        .where('user', '==', username)

    const [metrics] = useCollectionData(query, {idField: 'id'})
    
    useEffect(() => {
        if (metrics?.length) {
            const orderedMetrics = _.sortBy(metrics, [(o) => { return o.millsTime; }]) 
            setShownMetrics(orderedMetrics)
        }
    }, [metrics])

    const isErrorLog = (log: string) => {
        return /^.*FAILED*/i.test(log);
    }

    const generateMetricsMessages = () => {
        return shownMetrics.map((metric: Metric) => {
            return isErrorLog(metric.log) 
                ? <div className={styles.metricError}>{metric.log}</div>
                : <div className={styles.metric}>{metric.log}</div>
        })
    }

    return(
    <>
    <pre className={styles.metricsContainer}>
        {shownMetrics && generateMetricsMessages()}
    </pre>
    </>
    )
}
