import { faEnvelope, faLock, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useContext } from 'react'
import Swal from 'sweetalert2'
import { DictionaryContext } from '../contexts/DictionaryContext'
import useAuthentication from '../hooks/useAuthentication'
import { SignUpCredentials } from '../models/SignUpCredentials'
import formStyle from '../styles/Forms.module.css'

export default function SignUpForm(): JSX.Element {
  const dictionaryState = useContext(DictionaryContext)
  const [isCriticUser, setIsCriticUser] = useState(false)
  const { signup } = useAuthentication()
  const [signupData, setSignupData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    location: '',
  })

  const registerUser = async event => {
    event.preventDefault()
    const signupCredentials: SignUpCredentials = { 
      username: signupData.email, 
      password: signupData.password,
      location: signupData.location,
      isCriticUser: isCriticUser,
      language: dictionaryState.dictionary.id
    }

    if (signupData.password !== signupData.confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Your passwords don\'t match!',
        text: 'Please verify and try again.'
      });
    } else {
      signup(signupCredentials)
        .then((res) => console.log(signupCredentials))
        .catch((err) => {
          switch (err.response.status) {
            default: {
              Swal.fire({
                icon: 'error',
                title: 'Something went wrong',
                text: 'Please try again later.',
              });
            }
          }
      });
    }
  }

  const handleInputChange = (event) => {
    setSignupData({
      ...signupData,
      [event.target.name] : event.target.value
    })
  }

  return (
    <>
      <form onSubmit={registerUser} className={formStyle.form}>
      <div className={formStyle.inputContainer}>
          <FontAwesomeIcon icon={faEnvelope} className={formStyle.inputIcon} />
          <input id="email" onChange={handleInputChange} name="email" type="mail" className={formStyle.input} placeholder={dictionaryState.dictionary.signup.form.email} />
        </div>
        <div className={formStyle.inputContainer}>
          <FontAwesomeIcon icon={faLock} className={formStyle.inputIcon} />
          <input id="password" onChange={handleInputChange} name="password" type="password" className={formStyle.input} placeholder={dictionaryState.dictionary.signup.form.password} />
        </div>
        <div className={formStyle.inputContainer}>
          <FontAwesomeIcon icon={faLock} className={formStyle.inputIcon} />
          <input id="confirmPassword" onChange={handleInputChange} name="confirmPassword" type="password" className={formStyle.input} placeholder={dictionaryState.dictionary.signup.form.confirmPassword} />
        </div>
        <div className={formStyle.inputContainer}>
          <FontAwesomeIcon icon={faGlobeAmericas} className={formStyle.inputIcon} />
          <input id="location" onChange={handleInputChange} name="location" type="text" className={formStyle.input} placeholder={dictionaryState.dictionary.signup.form.location} />
        </div>
        <div className={formStyle.checkboxContainer} onClick={() => setIsCriticUser(!isCriticUser)}>
          <input id="isCritic" onChange={handleInputChange} name="isCritic" type="checkbox" className={formStyle.checkbox}/> 
            {isCriticUser 
            ? <p className={formStyle.checkboxText}>{dictionaryState.dictionary.signup.form.isCriticMsg}</p>  
            : <p className={formStyle.checkboxText}>{dictionaryState.dictionary.signup.form.isNotCriticMsg}</p> }
        </div>
        <button type="submit" className={formStyle.submit}>{dictionaryState.dictionary.signup.form.submit}</button>
      </form>
    </>
  )
}
