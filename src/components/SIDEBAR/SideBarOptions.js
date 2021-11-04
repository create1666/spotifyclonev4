import React from "react";
import "./SideBarOptions.css";
const SideBarOptions = ({ title, Icon }) => {
  return (
    <div className="sidebar-options">
      {Icon && <Icon className="sidebar-options_icon" />}
      {Icon ? (
        <h4>
          <p>{title}</p>
        </h4>
      ) : (
        <p>{title}</p>
      )}
    </div>
  );
};

export default SideBarOptions;
