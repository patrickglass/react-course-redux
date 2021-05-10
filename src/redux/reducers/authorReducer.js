import actionTypes from "../actions/actionTypes";

const authorReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
};

export default authorReducer;
