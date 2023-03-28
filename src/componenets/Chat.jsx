import { Avatar, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import "./Chat.css";
import LogoutIcon from "@mui/icons-material/Logout";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { UserChatContex } from "../contex/ChatContex";
import { UserAuth } from "../contex/AuthContex";
import Messages from "./Messages";
import {
  arrayUnion,
  doc,
  onSnapshot,
  Timestamp,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { v4 as uuid } from "uuid";
function Chat() {
  const { user } = UserAuth();
  const { data } = UserChatContex();
  const [newMsg, setNewMsg] = useState("");
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [receiver, setReceiver] = useState({});

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });
    const unsubscribe2 = onSnapshot(
      doc(db, "users", data.chatId.replace("KAFJPfX9eqegj1BfHyEnmINMJ222", "")),
      (doc) => {
        doc.exists() && setReceiver(doc.data());
      }
    );
    return () => {
      unsubscribe();
      unsubscribe2();
    };
  }, [data.chatId]);

  const sendMessage = async (e) => {
    e.preventDefault();

    await updateDoc(doc(db, "chats", data.chatId), {
      messages: arrayUnion({
        id: uuid(),
        newMsg,
        senderId: user.uid,
        senderName: user.displayName,
        date: Timestamp.now(),
        senderEmail: user.email,
        receiverName:
          receiver?.displayName === user.displayName
            ? "Mehmet Nadi"
            : receiver?.displayName,
        receiverId:
          receiver?.uid === user.uid
            ? "KAFJPfX9eqegj1BfHyEnmINMJ222"
            : receiver?.uid,
        receiverEmail:
          receiver?.email === user.email
            ? "mhmtalperennadi@gmail.com"
            : receiver?.email,
      }),
    });

    await updateDoc(doc(db, "emailLog", data.chatId), {
      emailNotificiationHistory: arrayUnion({
        id: uuid(),
        senderId: user.uid,
        senderName: user.displayName,
        date: Timestamp.now(),
        senderEmail: user.email,
        receiverName:
          receiver?.displayName === user.displayName
            ? "Mehmet Nadi"
            : receiver?.displayName,
        receiverId:
          receiver?.uid === user.uid
            ? "KAFJPfX9eqegj1BfHyEnmINMJ222"
            : receiver?.uid,
        receiverEmail:
          receiver?.email === user.email
            ? "mhmtalperennadi@gmail.com"
            : receiver?.email,
      }),
    });
    setNewMsg("");
  };

  const handleSignOut = async () => {
    try {
      signOut(auth);
      navigate("/");
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
        {messages.map((msg) => (
          <Messages message={msg} key={msg.id} />
        ))}
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
