import actionTypes from "../actions/actionTypes";

const courseReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.CREATE_COURSE:
      return [...state, { ...action.course }];
    case actionTypes.UPDATE_COURSE:
      return state.courses.map((course) =>
        course.id === action.course.id ? action.course : course
      );
    case actionTypes.DELETE_COURSE:
      return state.courses.filter(
        (course) => course.id !== parseInt(action.id, 10)
      );
    case actionTypes.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
};

export default courseReducer;
