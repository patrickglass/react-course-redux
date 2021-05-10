import actionTypes from "./actionTypes";
import * as courseApi from "../../api/courseApi";

// const createCourse = (course) => {
//   return {
//     type: actionTypes.CREATE_COURSE,
//     course,
//   };
// };

// const updateCourse = (course) => {
//   return {
//     type: actionTypes.UPDATE_COURSE,
//     course,
//   };
// };

const saveCourse = (course) => {
  return {
    type: course.id ? actionTypes.UPDATE_COURSE : actionTypes.CREATE_COURSE,
    course,
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
