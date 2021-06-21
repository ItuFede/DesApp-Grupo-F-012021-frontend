/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import '../styles/globals.css'
import React from 'react'
import { DictionaryContextProvider } from '../contexts/dictionary/DictionaryContext'
import MainPage from '../pageComponents/MainPage'

export default function MyApp({ Component, pageProps }) {

  return(
    <DictionaryContextProvider>
      <Component { ...pageProps } />
      <MainPage/>
    </DictionaryContextProvider>
  )
}
