import React from "react";
import Header from "../HEADER/Header";
import "./Body.css";
import { resources } from "../../Resources";
// import { useStateValue } from "../../StateProvider";
import PlaylistTable from "../PlaylistTable/playlist-table";
import { useStateValue } from "../../StateProvider";

const Body = () => {
  const { imgLink2 } = resources;
  const [{ weeklyPlaylist }, dispatch] = useStateValue();
  // console.log("LLL>>>>>", pops);
  return (
    <div className="bodysidebar">
      <Header />
      <div className="body__info">
        <img src={imgLink2} alt="" className="img__tag" />
        <div className="body__text">
          <strong>PLAYLIST</strong>
          <h2>Discover weekly</h2>
          <p>description...</p>
        </div>
      </div>
      <PlaylistTable weeklyPlaylist={weeklyPlaylist} dispatch={dispatch} />
    </div>
  );
};

export default Body;
