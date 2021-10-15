import './App.css';
import React, { useState } from 'react'
import Login from './components/LOGIN/Login';
import  { useEffect } from 'react'
import { getTokenUrl } from './Utils';


const App = () => {
  const [token, setToken] = useState(null)
useEffect(() => {
   const hash = getTokenUrl()
   window.location.hash = ""
   const _token = hash.access_token

   if(_token){
     setToken(_token)
   }
   console.log("I HAVE A TOKEN=>", token)
}, [])
  return (
    <div className="app">
     
    {token? <h1>Successfully logged in</h1> :  <Login/>}
    </div>
  )
}

export default App

