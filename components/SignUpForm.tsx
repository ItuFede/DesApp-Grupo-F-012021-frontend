import { faEnvelope, faLock, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import formStyle from '../styles/Forms.module.css'

export default function Form(): JSX.Element {
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
            <input id="email" name="email" type="mail" className={formStyle.input} placeholder="Escribe tu e-mail" />
          </div>
          <div className={formStyle.inputContainer}>
            <FontAwesomeIcon icon={faLock} className={formStyle.inputIcon} />
            <input id="password" name="password" type="password" className={formStyle.input} placeholder="Escribe tu contraseña" />
          </div>
          <div className={formStyle.inputContainer}>
            <FontAwesomeIcon icon={faLock} className={formStyle.inputIcon} />
            <input id="confirmPassword" name="confirmPassword" type="password" className={formStyle.input} placeholder="Repite tu contraseña" />
          </div>
          <div className={formStyle.inputContainer}>
            <FontAwesomeIcon icon={faGlobeAmericas} className={formStyle.inputIcon} />
            <input id="location" name="location" type="password" className={formStyle.input} placeholder="¿De dónde sos?" />
          </div>
          <div className={formStyle.checkboxContainer} onClick={() => setIsCriticUser(!isCriticUser)}>
            <input id="location" name="location" type="checkbox" className={formStyle.checkbox}/> 
              {isCriticUser 
              ? <p className={formStyle.checkboxText}>Soy crítico profesional de películas y series 🤙😎🤙</p>  
              : <p className={formStyle.checkboxText}>No soy crítico profesional de películas y series</p> }
          </div>
          <button type="submit" className={formStyle.submit}>Registrarse</button>
        </form>
      </>
    )
  }
