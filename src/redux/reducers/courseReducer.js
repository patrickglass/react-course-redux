import actionTypes from "../actions/actionTypes";

const courseReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.CREATE_COURSE_SUCCESS:
      return [...state, { ...action.course }];
    case actionTypes.UPDATE_COURSE_SUCCESS:
      return state.map((course) =>
        course.id === action.course.id ? action.course : course
      );
    case actionTypes.DELETE_COURSE_SUCCESS:
      // FIXME: this does not match the action type we changed to now.
      return state.filter((course) => course.id !== parseInt(action.id, 10));
    case actionTypes.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
};

export default courseReducer;
