import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import formStyle from '../styles/Forms.module.css'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { DictionaryContext } from '../contexts/DictionaryContext';
import { useContext } from 'react';
import useAuthentication from '../hooks/useAuthentication';
import { LoginCredentials } from '../models/LoginCredentials';
import Swal from 'sweetalert2';

export default function LoginForm(): JSX.Element {
  const dictionaryState = useContext(DictionaryContext)
  const {login} = useAuthentication();
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })

  const loginUser = async event => {
    event.preventDefault()
    const loginCredentials: LoginCredentials = { username: loginData.email, password: loginData.password }
    login(loginCredentials)
      .then((res) => console.log(res.data))
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
      });
  }

  const handleInputChange = (event) => {
    setLoginData({
        ...loginData,
        [event.target.name] : event.target.value
    })
}

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
