import { faEnvelope, faLock, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useContext } from 'react'
import { DictionaryContext } from '../contexts/DictionaryContext'
import formStyle from '../styles/Forms.module.css'

export default function SignUpForm(): JSX.Element {
  const dictionaryState = useContext(DictionaryContext)

  const [isCriticUser, setIsCriticUser] = useState(false)
    const registerUser = async event => {
      event.preventDefault()
      const res = await fetch('/api/signup', {
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
          <div className={formStyle.inputContainer}>
            <FontAwesomeIcon icon={faLock} className={formStyle.inputIcon} />
            <input id="confirmPassword" name="confirmPassword" type="password" className={formStyle.input} placeholder={dictionaryState.dictionary.signup.form.confirmPassword} />
          </div>
          <div className={formStyle.inputContainer}>
            <FontAwesomeIcon icon={faGlobeAmericas} className={formStyle.inputIcon} />
            <input id="location" name="location" type="password" className={formStyle.input} placeholder={dictionaryState.dictionary.signup.form.location} />
          </div>
          <div className={formStyle.checkboxContainer} onClick={() => setIsCriticUser(!isCriticUser)}>
            <input id="isCritic" name="isCritic" type="checkbox" className={formStyle.checkbox}/> 
              {isCriticUser 
              ? <p className={formStyle.checkboxText}>{dictionaryState.dictionary.signup.form.isCriticMsg}</p>  
              : <p className={formStyle.checkboxText}>{dictionaryState.dictionary.signup.form.isNotCriticMsg}</p> }
          </div>
          <button type="submit" className={formStyle.submit}>{dictionaryState.dictionary.signup.form.submit}</button>
        </form>
      </>
    )
  }
