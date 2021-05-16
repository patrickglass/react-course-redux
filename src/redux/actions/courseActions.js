import actionTypes from "./actionTypes";
import * as courseApi from "../../api/courseApi";

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

const deleteCourse = (id) => {
  return {
    type: actionTypes.DELETE_COURSE,
    id,
  };
};

const loadCoursesSuccess = (courses) => {
  return { type: actionTypes.LOAD_COURSES_SUCCESS, courses };
};

const loadCourses = () => {
  return function (dispatch) {
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

export { saveCourse, deleteCourse, loadCourses, loadCoursesSuccess };
