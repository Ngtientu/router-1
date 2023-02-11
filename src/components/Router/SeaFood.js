import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
//component
import FormDangKy from "./SeaFood/FormDangKy";
export default function SeaFood() {
  return (
    <div>
      <div className="food-container">
        <div className="food-nav">
          <h1>Home Page</h1>
          <Link className="link " to="/">
            Home Page{" "}
          </Link>
        </div>
        <div className="food-table">
          <h1 className="food-title">Welcome to SeaFood Page. </h1>
          <div>
            <FormDangKy />
          </div>
        </div>
        <div>
          <p className="about-end"> Hết òiiiii ...</p>
          <Link className="link link-footer" to="/">
            Về Home Page đi người anh em =)){" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
