/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import '../styles/globals.css'
import React from 'react'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
