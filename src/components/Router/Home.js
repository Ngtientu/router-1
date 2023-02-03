import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="nav-home">
        <h1> Home Page</h1>
        <Link className="link" to="/about">
          About{" "}
        </Link>
        <Link className="link" to="/food">
          Food{" "}
        </Link>
        <Link className="link" to="/seafood">
          SeaFood{" "}
        </Link>
        <Link className="link" to="/error">
          Error
        </Link>
      </div>
      <div className="home-title">
        ở đây chẳng có gì đâu :)) vào các tab navbar để xem nhé !!!
      </div>
    </div>
  );
}
