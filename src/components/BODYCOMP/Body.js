import React from "react";
import Header from "../HEADER/Header";
import "./Body.css";
import { resources } from "../../Resources";

const Body = () => {
  const { imgLink2 } = resources;
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
    </div>
  );
};

export default Body;
