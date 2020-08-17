import React from "react";
import "./error.styles.css";

function Error() {
  return (
    <div
      className="d-flex align-items-center flex-column justify-content-center h-100 mt-25vh"
      id="header"
    >
      <div className="background-text">404</div>
      <h1 className="display-4">PAGE NOT FOUND</h1>
      <a className="btn home-button" href="/">
        HOMEPAGE
      </a>
    </div>
  );
}

export default Error;
