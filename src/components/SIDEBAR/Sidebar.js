import React from "react";
import { Resources } from "../../Resources";
import "./Sidebar.css";
const Sidebar = () => {
  const { img } = Resources;
  return (
    <div className="sidebar">
      <img src={img} alt="" className="img_sidebar" />
      <h1>I'm the sidebar</h1>
    </div>
  );
};

export default Sidebar;
