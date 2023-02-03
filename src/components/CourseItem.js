import React from "react";
import courses from "./courses";

const CourseItem = (props) => (
  <div className="courses-container">
    <h2>{props.title}</h2>
    <img className="courses-img" width="40%" src={props.image} />
    <p>{props.description}</p>
    <p>{props.studentsCount}</p>
  </div>
);

export default CourseItem;
