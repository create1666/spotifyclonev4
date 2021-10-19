import React from "react";
import Body from "../BODYCOMP/Body";
import Footer from "../FOOTER/Footer";
import Sidebar from "../SIDEBAR/Sidebar";
import "./player.css";

const Player = ({ spotifyApi }) => {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar />
        <Body />
      </div>
      <Footer />
    </div>
  );
};

export default Player;
