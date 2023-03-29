import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../contex/AuthContex";

export default function Protected({ children }) {
  const { user } = UserAuth();

  if (!user) {
    console.log("user", user);
    console.log("!user", !user);
    return <Navigate to="/" />;
  }
  return children;
}
