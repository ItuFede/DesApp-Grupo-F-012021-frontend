/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { dictionary as EN_US } from '../dictionaries/EN_US'
import { dictionary as ES_AR } from '../dictionaries/ES_AR'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const DictionaryContext = React.createContext({
  dictionary: ES_AR,
  setDictionary: () => {}
})

export const DictionaryContextProvider = (props) => {
  const {storageGet} = useLocalStorage()
  const dictionaries = [EN_US, ES_AR]

  const setDictionary = (dictionaryId) => {
    const dictionary = dictionaries.find(d => d.id === dictionaryId) || ES_AR
    setDictionaryState({dictionary: {...dictionary}, setDictionary})
  }

  const initState = {
    dictionary: storageGet('dictionaryState')?.dictionary || ES_AR,
    setDictionary: setDictionary
  } 

  const [dictionaryState, setDictionaryState] = useState(initState)

  return (
    <DictionaryContext.Provider value={dictionaryState}>
      {props.children}
    </DictionaryContext.Provider>
  )
}



