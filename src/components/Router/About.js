import React from "react";
import { Link } from "react-router-dom";
import CourseItem from "../CourseItem";
import courses from "../courses";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-nav">
        {" "}
        <h1> About Page.</h1>
        <Link className="link" to="/">
          Home Page{" "}
        </Link>
      </div>
      <h1 className="about-title"> Welcome to About Website!!!</h1>
      <img
        className="about-img"
        src="https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/3-8.png"
      />
      <>
        {courses.map((course) => (
          <CourseItem
            key={course.id}
            title={course.title}
            description={course.description}
            studentsCount={course.students_count}
            image={course.thumbnail_cdn}
          />
        ))}
      </>
      <p className="about-end"> Hết òiiiii ...</p>
      <Link className="link link-footer" to="/">
        Về Home Page đi người anh em =)){" "}
      </Link>
    </div>
  );
}
