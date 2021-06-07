/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AlertDialog from './AlertDialog';

const useStyles = makeStyles({
    // createStyles({
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
    // })
});

export default function LoginForm() {
  const classes = useStyles();
  const [showAlert, setShowAlert] = useState(false);

    const registerUser = async event => {
      event.preventDefault()
      setShowAlert(true)
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
        {showAlert && <AlertDialog/>}
        <form onSubmit={registerUser} className={classes.form}>
            <label htmlFor="email">E-Mail</label>
            <input id="email" name="email" type="mail" required className={classes.input} />
            <label htmlFor="password">Contraseña</label>
            <input id="password" name="password" type="password" required className={classes.input} />
            <button type="submit" className={classes.submit}>Iniciar Sesión</button>
        </form>
      </>
    )
}
