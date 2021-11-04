import React from "react";
import Body from "../BODYCOMP/Body";
import Footer from "../FOOTER/Footer";
import Sidebar from "../SIDEBAR/Sidebar";
import AudioPlayer from "../AudioPlayer/audio-player";
import "./player.css";

const Player = ({ spotifyApi, track, playing }) => {
  return (
    <>
      <div className="player">
        <div className="player_body">
          <Sidebar />
          <Body />
        </div>
        <Footer />
      </div>
      <AudioPlayer track={track} playing={playing} />
    </>
  );
};

export default Player;
