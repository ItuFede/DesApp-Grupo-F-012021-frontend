import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import formStyle from '../styles/Forms.module.css'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { DictionaryContext } from '../contexts/DictionaryContext';
import { useContext } from 'react';
import useAuthentication from '../hooks/useAuthentication';
import { LoginCredentials } from '../models/LoginCredentials';
import Swal from 'sweetalert2';
import Router from 'next/router';
import useForm from '../hooks/useForm';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function LoginForm(): JSX.Element {
  const dictionaryState = useContext(DictionaryContext)
  const {login} = useAuthentication();
  const {storageGet, storageSet} = useLocalStorage();
  const {useInputHandler, validLoginCredentials} = useForm()
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })

  const loginUser = async event => {
    event.preventDefault()
    const loginCredentials: LoginCredentials = { username: loginData.email, password: loginData.password }
    if (validLoginCredentials(loginCredentials)) {
      login(loginCredentials)
        .then((res) => Router.push('/'))
        .catch((err) => {
          switch (err.response.status) {
            case 401: {
              Swal.fire({
                icon: 'error',
                title: 'Invalid e-mail or password',
                text: 'Please verify your credentials and try again.',
              });
            } break;
            default: {
              Swal.fire({
                icon: 'error',
                title: 'Something went wrong',
                text: 'Please try again later.',
              });
            }
          }
        })
    }
  }

  const handleRegisterRedirect = () => {
    if (typeof window !== 'undefined' && Router.query.registered_redirect) {
      const msg_registered = storageGet('msg_registered');
      if(!msg_registered) {
        Swal.fire({
          icon: 'success',
          title: '¡Tu registro ha sido un éxito!',
          text: 'Ya puedes iniciar sesión.',
        });
        storageSet('msg_registered', 'true')
      }
    }
  }

  const handleInputChange = event => {
    useInputHandler(event, loginData, setLoginData)
  }
  
  handleRegisterRedirect();
  
  return (
    <>
      <form onSubmit={loginUser} className={formStyle.form} id="loginForm">
        <div className={formStyle.inputContainer}>
          <FontAwesomeIcon icon={faEnvelope} className={formStyle.inputIcon} />
          <input onChange={handleInputChange} id="email" name="email" type="mail" className={formStyle.input} placeholder={dictionaryState.dictionary.signup.form.email} />
        </div>
        <div className={formStyle.inputContainer}>
          <FontAwesomeIcon icon={faLock} className={formStyle.inputIcon} />
          <input onChange={handleInputChange} id="password" name="password" type="password" className={formStyle.input} placeholder={dictionaryState.dictionary.signup.form.password} />
        </div>
        <button type="submit" className={formStyle.submit}>{dictionaryState.dictionary.login.form.submit}</button>
      </form>
    </>
  )
}
