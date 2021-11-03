import "./App.css";
import React from "react";
import Login from "./components/LOGIN/Login";
import { useEffect } from "react";
import { getTokenUrl } from "./Utils";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/PLAYER/Player";
import { useStateValue } from "./StateProvider";

// TODO =>  CREATE NEW INSTANCE OF OBJECT API TO ENABLE INHERITING ALL THE KEYS & VALUE PAIRS
const spotifyApi = new SpotifyWebApi();

const App = () => {
  const [{ token, track, playing }, dispatch] = useStateValue();

  useEffect(() => {
    // TODO => GET THE TOKEN URL USING THE FUNCTION CALL
    const hash = getTokenUrl();
    // TODO => CLEAR THE URL FROM THE BROWSER TAB TO HIDE SECRET TOKEN
    window.location.hash = "";
    // TODO => ACCESS THE TOKEN PROPERTY FROM THE STORED OBJECT
    const _token = hash?.access_token;

    // TODO => CONDITIONALLY CHECK IF TOKEN EXIST
    if (_token) {
      // TODO => SET ACCESS TOKEN FOR AUTHORIZATION PASS TO GRANT ACCESS TO API CALLS
      spotifyApi.setAccessToken(_token);
      // TODO => DISPATCH TOKEN TO BE LISTENED FOR AND SET IN THE STATE
      dispatch({ type: "SET_TOKEN", token: _token });

      spotifyApi.getMe().then((user) => {
        dispatch({ type: "SET_USER", user: user });
      });

      const fetchUserPlaylists = async () => {
        let response = await spotifyApi.getUserPlaylists();
        dispatch({ type: "SET_PLAYINGLIST", payload: response });
      };

      fetchUserPlaylists();

      const fetchPlaylist = async () => {
        const weeklyPlaylist = await spotifyApi.getPlaylist(
          "37i9dQZEVXcQSGRglBdAqu"
        );
        console.log("dataplalist", weeklyPlaylist);
        dispatch({ type: "SET_DISCOVER_WEEKLY", payload: weeklyPlaylist });
      };

      fetchPlaylist();
    }

    return () => {
      dispatch({});
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log(user);
  return (
    <div className="app">
      {token ? (
        <Player spotifyApi={spotifyApi} track={track} playing={playing} />
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
