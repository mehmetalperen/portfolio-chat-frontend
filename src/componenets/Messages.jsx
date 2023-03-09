import React, { useEffect, useRef } from "react";
import "./Messages.css";
import { UserAuth } from "../contex/AuthContex";

export default function Messages({ message }) {
  const { user } = UserAuth();

  const ref = useRef();

  const convertSecondToDate = (second) => {
    const date = new Date(second * 1000);
    // Hours part from the timestamp
    const hours = date.getHours();
    // Minutes part from the timestamp
    const minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    const seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    const formattedTime =
      hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

    return formattedTime;
  };

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
      <span className="chat_timestamp">
        {convertSecondToDate(message.date?.seconds)}
      </span>
    </p>
  );
}
