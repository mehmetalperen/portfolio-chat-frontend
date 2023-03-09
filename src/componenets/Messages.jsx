import React, { useEffect, useRef } from "react";
import "./Messages.css";
import { UserAuth } from "../contex/AuthContex";

export default function Messages({ message }) {
  const { user } = UserAuth();

  const ref = useRef();
  console.log(message);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  return (
    <p
      ref={ref}
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
