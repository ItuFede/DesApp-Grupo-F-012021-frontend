import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import formStyle from '../styles/Forms.module.css'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'

export default function LoginForm(): JSX.Element {

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
            <input id="email" name="email" type="mail" className={formStyle.input} placeholder="Escribe tu e-mail" />
          </div>
          <div className={formStyle.inputContainer}>
            <FontAwesomeIcon icon={faLock} className={formStyle.inputIcon} />
            <input id="password" name="password" type="password" className={formStyle.input} placeholder="Escribe tu contraseña" />
          </div>
          <button type="submit" className={formStyle.submit}>Iniciar Sesión</button>
        </form>
      </>
    )
}
