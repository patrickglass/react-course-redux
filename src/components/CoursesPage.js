import React, { useEffect } from "react";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";
import * as courseActions from "../redux/actions/courseActions";
import * as authorActions from "../redux/actions/authorActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const CoursesPage = (props) => {
  useEffect(() => {
    if (props.courses.length === 0) {
      props.actions.loadCourses().catch((error) => {
        alert("Loading courses failed" + error);
      });
    }
    if (props.authors.length === 0) {
      props.actions.loadAuthors().catch((error) => {
        alert("Loading authors failed" + error);
      });
    }
  }, [props.actions, props.courses.length, props.authors.length]);

  console.log(props.courses);

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CourseList
        courses={props.courses}
        authors={props.authors}
        onDelete={props.actions.deleteCourse}
      />
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      saveCourse: bindActionCreators(courseActions.saveCourse, dispatch),
      deleteCourse: bindActionCreators(courseActions.deleteCourse, dispatch),
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
