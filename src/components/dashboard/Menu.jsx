import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import AddIcon from "@mui/icons-material/Add";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
function Menu() {
  return (
    <div className="menu-bar">
      <div className="menu-item home">Home</div>
      <div className="menu-right">
        <AddIcon className="menu-item" />

        <NotificationsIcon className="menu-item" />
        <PersonIcon className="menu-item " />
      </div>
    </div>
  );
}

export default Menu;
