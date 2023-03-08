import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import Sidebarchat from "./Sidebarchat";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
function Sidebar() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const res = [];
      querySnapshot.forEach((doc) => {
        res.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setUsers(res);
    };
    getUsers();
  }, []);

  const handleSelectChat = async () => {};

  useEffect(() => {
    console.log(users);
  }, [users]);
  return (
    <div className="sidebar">
      <div className="sidebar_chats">
        {users.map(
          (user) =>
            !user.data.isAdmin && (
              <div key={user.data.id} onClick={handleSelectChat}>
                <Sidebarchat id={user.data.id} name={user.data.displayName} />
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default Sidebar;
