import React from "react";
import "./home.styles.css";

function Home() {
  return (
    <div
      className="d-flex align-items-center flex-column justify-content-center h-100 mt-25vh"
      id="header"
    >
      <h1 className="display-4">WELCOME</h1>
      <a className="btn custom-b" href="/login">
        LOGIN
      </a>
      <a className="btn custom-b mt-2" href="/register">
        SIGN UP
      </a>
    </div>
  );
}

export default Home;
