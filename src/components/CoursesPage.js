import React, { useEffect, useState } from "react";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  loadCourses,
  saveCourse,
  deleteCourse,
} from "../redux/actions/courseActions";
import { loadAuthors } from "../redux/actions/authorActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Spinner from "./common/Spinner";
import { propTypes } from "react-bootstrap/esm/Image";

const CoursesPage = ({
  history,
  courses,
  authors,
  loadAuthors,
  loadCourses,
  saveCourse,
  deleteCourse,
  loading,
}) => {
  const [redirectToAddCoursesPage, setRedirectToAddCoursesPage] = useState(
    false
  );

  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch((error) => {
        alert("Loading courses failed" + error);
      });
    }
    if (authors.length === 0) {
      loadAuthors().catch((error) => {
        alert("Loading authors failed" + error);
      });
    }
  }, [courses.length, authors.length, loadCourses, loadAuthors]);

  console.log(courses);

  const handleDelete = (id) => {
    console.log("course deleted", id);
    deleteCourse(id);
    toast.warning("course deleted!");
  };

  return (
    <>
      {redirectToAddCoursesPage && <Redirect to="/course" />}
      <h2>Courses</h2>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Link className="btn btn-primary" to="/course">
            Add Course
          </Link>
          <CourseList
            courses={courses}
            authors={authors}
            onDelete={handleDelete}
          />
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map((course) => {
            return {
              ...course,
              authorName: state.authors.find((a) => a.id === course.authorId)
                .name,
            };
          }),
    authors: state.authors,
    loading: state.apiCallsInProgress > 0,
  };
};

const mapDispatchToProps = {
  saveCourse,
  deleteCourse,
  loadCourses,
  loadAuthors,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
