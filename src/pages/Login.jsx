import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import { Avatar } from "@mui/material";
import { UserAuth } from "../contex/AuthContex";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

export default function () {
  const { user, updateAdminRole, isAdmin } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const res = await signInWithPopup(auth, provider);
      updateAdminRole(res.user.email === "mhmtalperennadi@gmail.com");
      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName: res.user.displayName,
        email: res.user.email,
        isAdmin: res.user.email === "mhmtalperennadi@gmail.com",
      });

      //create empty user chats on firestore
      await setDoc(doc(db, "userChats", res.user.uid), {});

      navigate("/chat");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/chat");
    }
  }, [user]);
  return (
    <>
      <div className="login container">
        <div className="row">
          <div className="col-12">
            <div className="row ">
              <div className="login_header col-12 mb-3">
                <Avatar src="https://avatars.githubusercontent.com/u/31394639?v=4" />
                <h2>Hello, there!</h2>
              </div>
            </div>
          </div>
          <p className="mb-2">To start our legendary conversation:</p>
          <div className="d-grid mb-2">
            <button
              className="btn btn-outline-dark home-btns mb-0 mt-1"
              onClick={handleGoogleSignIn}
            >
              <i className="fab fa-google mb-0"></i> Sign in with Google
            </button>
          </div>
          <p className="disclamier mt-0">No selling emails. No newsettelers.</p>
        </div>
      </div>
    </>
  );
}
