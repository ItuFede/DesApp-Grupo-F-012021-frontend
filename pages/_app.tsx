/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import '../styles/globals.css'
import React from 'react'
import { DictionaryContextProvider } from '../contexts/DictionaryContext'

export default function MyApp({ Component, pageProps }) {

  return(
    <DictionaryContextProvider>
      <Component { ...pageProps } />
    </DictionaryContextProvider>
  )
}
