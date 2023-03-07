import React from "react";

export default function LoginErrPage() {
  return (
    <div class="d-flex align-items-center justify-content-center vh-100">
      <div class="text-center">
        <h1 class="display-1 fw-bold">Login First!</h1>
        <p class="fs-3">
          {" "}
          <span class="text-danger">Opps!</span> You need to login with a
          verified Google account, first.
        </p>

        <a href="/" class="btn btn-primary">
          Go Home
        </a>
      </div>
    </div>
  );
}
