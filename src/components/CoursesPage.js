import React, { useEffect, useState } from "react";
import courseStore from "../stores/courseStore";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";
import { loadCourses, deleteCourse } from "../actions/courseActions";

const CoursesPage = () => {
  const [courses, setCourses] = useState(courseStore.getCourses());

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if (courseStore.getCourses().length === 0) loadCourses();
    // Cleanup on unmount
    return () => courseStore.removeChangeListener(onChange);
  }, []);

  function onChange() {
    debugger;
    setCourses(courseStore.getCourses());
  }

  // function handleDelete(courseId) {
  //   console.log("list delete course: ", courseId);
  //   deleteCourse(courseId);
  //   // setCourses(courseStore.getCourses());
  //   // loadCourses();
  // }

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CourseList courses={courses} onDelete={deleteCourse} />
    </>
  );
};

export default CoursesPage;
