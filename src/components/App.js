import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import CoursesPage from "./CoursesPage";
import Header from "./common/Header";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div className="container-fluid">
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route path="/courses" component={CoursesPage} />
      {/* <Route path="/courses/:courseId" component={CoursesPage} /> */}
      <Route path="/about" component={AboutPage} />
    </div>
  );
};

export default App;
