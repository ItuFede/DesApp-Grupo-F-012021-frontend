import React from 'react'
import useAuthentication from '../hooks/useAuthentication'
import Page from '../pageComponents/Page'
import MainPage from '../pageComponents/MainPage'
import WelcomePage from '../pageComponents/WelcomePage'

export default function index(): JSX.Element {
  const { isAuthenticated } = useAuthentication();

  return (
    <>
    {
      isAuthenticated() 
      ? <Page component={<MainPage/>}/> 
      : <WelcomePage/> 
    }
    </>
  )
}
