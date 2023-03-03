import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebarchat.css";

function Sidebarchat() {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat_info">
        <h2>Room Name</h2>
        <p>Last msg in this room</p>
      </div>
    </div>
  );
}

export default Sidebarchat;
