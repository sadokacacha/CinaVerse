import React from "react";
import "./ErrorPage.css";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div>
      <h1 className="ErrorHandler">
        {" "}
        OOPS Wrong page let me take you to the main page
      </h1>

      <Link to="/">
        <button className="Errorpage_btn"> Main page</button>
      </Link>
    </div>
  );
}

export default ErrorPage;
