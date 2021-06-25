import React from 'react'
import { useContext } from 'react'
import { DictionaryContext } from '../contexts/DictionaryContext'

export default function Footer(): JSX.Element {
  const dictionaryState = useContext(DictionaryContext)
    return(
        <footer>
          <hr/>
          {dictionaryState.dictionary.footer}
        </footer>
    )
}
