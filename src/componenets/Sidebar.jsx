import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import Sidebarchat from "./Sidebarchat";
import { db } from "../firebase";
import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";
import { UserAuth } from "../contex/AuthContex";
function Sidebar() {
  const [users, setUsers] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    const getChats = () => {
      const unsubscribe = onSnapshot(doc(db, "userChats", user.uid), (doc) => {
        setUsers(doc.data());
      });
      return () => {
        unsubscribe();
      };
    };

    user.uid && getChats();
  }, [user.uid]);

  const handleSelectChat = async () => {};

  useEffect(() => {
    console.log(Object.entries(users));
  }, [users]);
  return (
    <div className="sidebar">
      <div className="sidebar_chats">
        {Object.entries(users)?.map((user) => (
          <div key={user[0]} onClick={handleSelectChat}>
            <Sidebarchat id={user[0]} name={user[1].userInfo.displayName} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
