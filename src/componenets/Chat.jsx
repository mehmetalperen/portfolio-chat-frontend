import { Avatar, IconButton } from "@mui/material";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import "./Chat.css";
import LogoutIcon from "@mui/icons-material/Logout";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Chat({ messages }) {
  const [newMsg, setNewMsg] = useState("");
  const navigate = useNavigate();
  const sendMessage = async (e) => {
    e.preventDefault();

    setNewMsg("");
  };

  const handleSignOut = async () => {
    try {
      signOut(auth);
      navigate("/login");
    } catch (err) {
      console.log("err", err);
    }
  };
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar src="https://avatars.githubusercontent.com/u/31394639?s=40&v=4"></Avatar>

        <div className="chat_headerInfo">
          <h3>Mehmet Nadi</h3>
        </div>

        <div className="chat_headerRight">
          <IconButton onClick={handleSignOut}>
            <LogoutIcon />
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
        <p className={`chat_message chat_reciever`}>
          <span className="chat_name">Mehmet Nadi</span>A message here. Read
          this. idk this supposed to be a msg.
          <span className="chat_timestamp">Now</span>
        </p>
        <p className={`chat_message`}>
          <span className="chat_name">Mehmet Nadi</span>A message here. Read
          this. idk this supposed to be a msg.
          <span className="chat_timestamp">Now</span>
        </p>
        <p className={`chat_message `}>
          <span className="chat_name">Mehmet Nadi</span>A message here. Read
          this. idk this supposed to be a msg.
          <span className="chat_timestamp">Now</span>
        </p>
        <p className={`chat_message chat_reciever`}>
          <span className="chat_name">Mehmet Nadi</span>A message here. Read
          this. idk this supposed to be a msg.
          <span className="chat_timestamp">Now</span>
        </p>
        <p className={`chat_message chat_reciever`}>
          <span className="chat_name">Mehmet Nadi</span>A message here. Read
          this. idk this supposed to be a msg.
          <span className="chat_timestamp">Now</span>
        </p>
      </div>

      <div className="chat_footer">
        <form>
          <input
            value={newMsg}
            onChange={(e) => setNewMsg(e.target.value)}
            type="text"
            placeholder="Type a message"
          />
          <button onClick={sendMessage} type="submit">
            <IconButton>
              <SendIcon />
            </IconButton>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
