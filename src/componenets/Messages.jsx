import React from "react";
import "./Messages.css";
import { UserAuth } from "../contex/AuthContex";
import { UserChatContex } from "../contex/ChatContex";

export default function Messages({ message }) {
  const { user } = UserAuth();
  const { data } = UserChatContex();

  console.log(message);

  return (
    <p
      className={`chat_message ${
        message.senderId === user.uid ? "chat_reciever" : ""
      }`}
    >
      <span className="chat_name">{message.senderName}</span>
      {message.newMsg}
      <span className="chat_timestamp">Now</span>
    </p>
  );
}
