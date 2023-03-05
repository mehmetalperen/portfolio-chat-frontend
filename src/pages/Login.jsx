import React, { useState } from "react";
import "./Login.css";
import { Avatar } from "@mui/material";
export default function () {
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
              onClick={() => console.log("fart")}
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
