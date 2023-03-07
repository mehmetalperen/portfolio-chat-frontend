import React from "react";
import "./Sidebar.css";
import Sidebarchat from "./Sidebarchat";
function Sidebar() {
  return (
    <div className="sidebar">
      <hr />
      <div className="sidebar_chats">
        <Sidebarchat />
        <Sidebarchat />
        <Sidebarchat />
      </div>
    </div>
  );
}

export default Sidebar;
