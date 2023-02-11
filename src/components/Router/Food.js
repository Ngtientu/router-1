import React from "react";
import { Link } from "react-router-dom";
import FormFood from "./Form/form-food";
export default function Food() {
  return (
    <div className="food-container">
      <div className="food-nav">
        <h1>Home Page</h1>
        <Link className="link " to="/">
          Home Page{" "}
        </Link>
      </div>
      <div>
        <FormFood />
      </div>
      <p className="about-end"> Hết òiiiii ...</p>
      <Link className="link link-footer" to="/">
        Về Home Page đi người anh em =)){" "}
      </Link>
    </div>
  );
}
