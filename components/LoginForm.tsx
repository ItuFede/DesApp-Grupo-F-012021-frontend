import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import formStyle from '../styles/Forms.module.css'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { DictionaryContext } from '../contexts/dictionary/DictionaryContext';
import { useContext } from 'react';

export default function LoginForm(): JSX.Element {
  const dictionaryState = useContext(DictionaryContext)

    const registerUser = async event => {
      event.preventDefault()
      const res = await fetch('/api/login', {
        body: JSON.stringify({
          name: event.target.name.value
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })
  
      const result = await res.json()
      console.log(result)
    }

    return (
      <>
        <form onSubmit={registerUser} className={formStyle.form}>
          <div className={formStyle.inputContainer}>
            <FontAwesomeIcon icon={faEnvelope} className={formStyle.inputIcon} />
            <input id="email" name="email" type="mail" className={formStyle.input} placeholder={dictionaryState.dictionary.signup.form.email} />
          </div>
          <div className={formStyle.inputContainer}>
            <FontAwesomeIcon icon={faLock} className={formStyle.inputIcon} />
            <input id="password" name="password" type="password" className={formStyle.input} placeholder={dictionaryState.dictionary.signup.form.password} />
          </div>
          <button type="submit" className={formStyle.submit}>{dictionaryState.dictionary.login.form.submit}</button>
        </form>
      </>
    )
}
