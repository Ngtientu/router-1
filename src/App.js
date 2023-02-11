import React from "react";
import CourseItem from "./components/CourseItem";
import courses from "./components/courses";
import { Route, Switch } from "react-router-dom";
//component
import Home from "./components/Router/Home";
import About from "./components/Router/About";
import Food from "./components/Router/Food.js";
import SeaFood from "./components/Router/SeaFood";
import Error from "./components/Router/Error";
//css
import style from "./css/style.css";
//component


function App() {
  return (
    <>
      <Switch className="nav-bar">
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/food" component={Food} />
        <Route path="/seafood" component={SeaFood} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
