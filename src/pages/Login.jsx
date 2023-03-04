import React, { useState } from "react";

export default function () {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-10  mx-auto">
            <div className="card flex-row border-0 shadow overflow">
              <div className="d-grid mb-2">
                <button
                  className="btn btn-lg btn-secondary btn-login fw-bold text-uppercase"
                  //   onClick={handleSignInWithGoogle}
                >
                  <i className="fab fa-google me-2"></i> Sign in with Google
                </button>
              </div>
              <hr />
              <p className="d-block text-center mt-2">
                Need an account? {/* <Link className=" small" to="/singup"> */}
                Sign Up
                {/* </Link> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
