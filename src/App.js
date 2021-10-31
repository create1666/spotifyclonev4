import "./App.css";
import React from "react";
import Login from "./components/LOGIN/Login";
import { useEffect } from "react";
import { getTokenUrl } from "./Utils";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/PLAYER/Player";
import { useStateValue } from "./StateProvider";

const spotifyApi = new SpotifyWebApi();

const App = () => {
  const [{ token }, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenUrl();
    window.location.hash = "";

    const _token = hash?.access_token;

    if (_token) {
      dispatch({ type: "SET_TOKEN", token: _token });
      spotifyApi.setAccessToken(_token); //set access
      spotifyApi.getMe().then((user) => {
        dispatch({ type: "SET_USER", user: user });
      });

      const fetchPlaylists = async () => {
        let response = await spotifyApi.getUserPlaylists();
        if (response) {
          let playlists = await response;
          dispatch({ type: "SET_PLAYINGLIST", payload: playlists });
        }
      };
      fetchPlaylists();
    }

    return () => {
      dispatch({});
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log(user);
  return (
    <div className="app">
      {token ? <Player spotifyApi={spotifyApi} /> : <Login />}
    </div>
  );
};

export default App;
