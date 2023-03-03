import { Avatar, Icon, IconButton } from "@mui/material";
import React, { useState } from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import "./Chat.css";
import MicIcon from "@mui/icons-material/Mic";
import axios from "../axios";

function Chat({ messages }) {
  const [newMsg, setNewMsg] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    await axios.post("/api/messages/new", {
      message: newMsg,
      name: "You",
      timestamp: "just now",
      received: true,
    });
    setNewMsg("");
  };
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar></Avatar>

        <div className="chat_headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>

        <div className="chat_headerRight">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat_body">
        {messages.map((msg) => {
          return (
            <p className={`chat_message ${msg.received && " chat_reciever"}`}>
              <span className="chat_name">{msg.name}</span>
              {msg.message}
              <span className="chat_timestamp">{msg.timestamp}</span>
            </p>
          );
        })}
      </div>

      <div className="chat_footer">
        <IconButton>
          <SentimentSatisfiedAltIcon />
        </IconButton>

        <form>
          <input
            value={newMsg}
            onChange={(e) => setNewMsg(e.target.value)}
            type="text"
            placeholder="Type a message"
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
