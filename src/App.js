import './App.css';
import React, {  useState } from 'react'
import Login from './components/LOGIN/Login';
import  { useEffect } from 'react'
import { getTokenUrl } from './Utils';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/PLAYER/Player';
import {   useStateValue,  } from './StateProvider';




const spotifyApi = new SpotifyWebApi();

const App = () => {

  const [token, setToken] = useState(null)
  const [{user}, dispatch]=useStateValue()

useEffect(() => {
   const hash = getTokenUrl()
   window.location.hash = "" 

   const _token = hash.access_token
  

   if(_token){
     setToken(_token)

     spotifyApi.setAccessToken(_token)

     spotifyApi.getMe().then((user) => {
       dispatch({type: 'SET_USER', user:user}) 
     })
    } 

  return () => {
    // setToken("")
  }// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])  

    console.log("usertString => ", user)

  return (  <div className="app">
     
    {token? <Player /> :  <Login/>}   </div> 
         
  )
}

export default App

