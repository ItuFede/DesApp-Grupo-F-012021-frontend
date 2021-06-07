import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react'
import AlertDialog from './AlertDialog';

const useStyles = makeStyles({
    // return {
        input: {
            fontSize: '1.8rem',
            padding: '0.5rem',
            borderRadius: '15px',
            border: '1px solid var(--colorPrimary)',
            margin: '1.3rem 0'
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        submit: {
            color: 'var(--colorPrimary)',
            fontSize: '2rem',
            fontWeight: 'bolder',
            background: 'white',
            border: '0px',
            '&:hover': {
                color: 'var(--colorSecondary)',
                transform: 'scale(1.5)',
            },
        },
    // }
});

export default function Form() {
  const classes = useStyles();
  const [showAlert, setShowAlert] = useState(false);

    const registerUser = async event => {
      event.preventDefault()
      setShowAlert(true)
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
        {showAlert && <AlertDialog/>}
        <form onSubmit={registerUser} className={classes.form}>
            <label htmlFor="email">E-Mail</label>
            <input id="email" name="email" type="mail" required className={classes.input} />
            <label htmlFor="password">Contraseña</label>
            <input id="password" name="password" type="password" required className={classes.input} />
            <label htmlFor="verifyPassword">Repetir contraseña</label>
            <input id="verifyPassword" name="verifyPassword" type="password" required className={classes.input} />
            <button type="submit" className={classes.submit}>Registrarse</button>
        </form>
      </>
    )
  }
