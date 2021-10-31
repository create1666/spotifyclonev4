import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import "./Header.css";
import { useStateValue } from "../../StateProvider";
const Header = () => {
  const [{ user }] = useStateValue();
  console.log("Header", user);
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search for Artists Songs, title..."
          className="input__tag"
        />
      </div>
      <div className="header__right">
        <Avatar alt="artist name" src={""} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;
