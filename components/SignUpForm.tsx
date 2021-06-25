import { faEnvelope, faLock, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useContext, useEffect } from 'react'
import Swal from 'sweetalert2'
import { DictionaryContext } from '../contexts/DictionaryContext'
import useAuthentication from '../hooks/useAuthentication'
import { SignUpCredentials } from '../models/SignUpCredentials'
import formStyle from '../styles/Forms.module.css'
import Router from 'next/router'
import useForm from '../hooks/useForm'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { Dropdown } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';

export default function SignUpForm(): JSX.Element {
  const dictionaryState = useContext(DictionaryContext)
  const {storageDelete} = useLocalStorage()
  const {useInputHandler, validSignupCredentials} = useForm()
  const { signup } = useAuthentication()
  const [signupData, setSignupData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    platform: '',
  })

  useEffect(() => {
    storageDelete('msg_registered');
    console.info('Removed msg_deleted key from local storage');
  }, []);

  const registerUser = async event => {
    event.preventDefault()
    const signupCredentials: SignUpCredentials = { 
      username: signupData.email, 
      password: signupData.password,
      platform: selectedPlatform,
      language: dictionaryState.dictionary.id
    }

    if (validSignupCredentials(signupCredentials, signupData.confirmPassword)) {
      signup(signupCredentials)
        .then((res) => {
          Router.push('/login?registered_redirect=true')
        })
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
    useInputHandler(event, signupData, setSignupData)
  }

  const dropdownPlatforms = [
    'Netflix', 'Amazon Prime', 'Disney Plus'
  ]

  const [selectedPlatform, setSelectedPlatform] = useState('')

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
          <FontAwesomeIcon icon={faFilm} className={formStyle.inputIcon} />
        <Dropdown
          options={dropdownPlatforms}
          onChange={(selected) => setSelectedPlatform(selected.value)}
          placeholder={dictionaryState.dictionary.signup.form.platform}
        />
        </div>
        <button type="submit" className={formStyle.submit}>{dictionaryState.dictionary.signup.form.submit}</button>
      </form>
    </>
  )
}
