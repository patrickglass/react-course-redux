import actionTypes from "./actionTypes";
import * as courseApi from "../../api/courseApi";
import { beginApiCall } from "./apiStatusActions";

const createCourseSuccess = (course) => {
  return {
    type: actionTypes.CREATE_COURSE_SUCCESS,
    course,
  };
};

const updateCourseSuccess = (course) => {
  return {
    type: actionTypes.LOAD_AUTHORS_SUCCESS,
    course,
  };
};

const saveCourse = (course) => {
  return function (dispatch) {
    dispatch(beginApiCall());
    return courseApi
      .saveCourse(course)
      .then((savedCourse) => {
        course.id
          ? dispatch(updateCourseSuccess(savedCourse))
          : dispatch(createCourseSuccess(savedCourse));
      })
      .catch((error) => {
        throw error;
      });
  };
};

const loadCoursesSuccess = (courses) => {
  return { type: actionTypes.LOAD_COURSES_SUCCESS, courses };
};

const loadCourses = () => {
  return function (dispatch) {
    dispatch(beginApiCall());
    return courseApi
      .getCourses()
      .then((courses) => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch((error) => {
        throw error;
      });
  };
};

const deleteCourseSuccess = (id) => {
  return {
    type: actionTypes.DELETE_COURSE_SUCCESS,
    id,
  };
};

const deleteCourse = (id) => {
  return function (dispatch) {
    dispatch(beginApiCall());
    return courseApi
      .deleteCourse(id)
      .then((savedId) => {
        dispatch(deleteCourseSuccess(savedId));
      })
      .catch((error) => {
        throw error;
      });
  };
};

export {
  saveCourse,
  deleteCourse,
  deleteCourseSuccess,
  loadCourses,
  loadCoursesSuccess,
};
