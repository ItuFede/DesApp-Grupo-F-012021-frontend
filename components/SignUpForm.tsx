import React, { useState } from 'react'

export default function Form(): JSX.Element {

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
        <form onSubmit={registerUser}>
            <label htmlFor="email">E-Mail</label>
            <input id="email" name="email" type="mail" required />
            <label htmlFor="password">Contraseña</label>
            <input id="password" name="password" type="password" required />
            <label htmlFor="verifyPassword">Repetir contraseña</label>
            <input id="verifyPassword" name="verifyPassword" type="password" required/>
            <button type="submit">Registrarse</button>
        </form>
      </>
    )
  }
