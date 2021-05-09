import React, { useEffect } from "react";
import courseStore from "../stores/courseStore";

import CourseList from "./CourseList";
import { Link } from "react-router-dom";
import * as courseActions from "../redux/actions/courseActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const CoursesPage = (props) => {
  useEffect(() => {
    if (courseStore.getCourses().length === 0) {
      props.actions.loadCourses().catch((error) => {
        alert("Loading courses failed" + error);
      });
    }
  }, [props.actions]);

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CourseList
        courses={props.courses}
        onDelete={courseActions.deleteCourse}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    courses: state.courses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
