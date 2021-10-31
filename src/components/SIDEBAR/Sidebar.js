import React from "react";
import { resources } from "../../Resources";
import "./Sidebar.css";
import SideBarOptions from "./SideBarOptions";
import HomeIcon from "@mui/icons-material/Home";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SearchIcon from "@mui/icons-material/Search";
import { useStateValue } from "../../StateProvider";
const Sidebar = () => {
  const [{ payload }] = useStateValue();
  const { img } = resources;

  return (
    <div className="sidebar">
      <img src={img} alt="" className="img_sidebar" />
      <SideBarOptions Icon={HomeIcon} title="Home" />
      <SideBarOptions Icon={SearchIcon} title="Search" />
      <SideBarOptions Icon={LibraryMusicIcon} title="Library" />

      <br />
      <strong className="sideabr_title">PLAYLIST</strong>
      <hr />

      {payload?.items.map((item, index) => {
        return <SideBarOptions key={index} title={item.name} />;
      })}
    </div>
  );
};

export default Sidebar;
