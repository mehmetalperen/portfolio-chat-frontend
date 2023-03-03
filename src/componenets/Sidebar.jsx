import React from "react";
import "./Sidebar.css";
import ChatIcon from "@mui/icons-material/Chat";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import { Avatar, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Sidebarchat from "./Sidebarchat";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar src="https://avatars.githubusercontent.com/u/31394639?s=40&v=4" />
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Serach or start new chat" />
        </div>
      </div>

      <div className="sidebar_chats">
        <Sidebarchat />
        <Sidebarchat />
        <Sidebarchat />
      </div>
    </div>
  );
}

export default Sidebar;
