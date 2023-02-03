import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="error-container">
      <h1> 404 - Error Page</h1>

      <Link className="link" to="/">
        Home Page{" "}
      </Link>
    </div>
  );
}
