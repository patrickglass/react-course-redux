import actionTypes from "./actionTypes";
import * as authorApi from "../../api/authorApi";
import { beginApiCall } from "./apiStatusActions";

const loadAuthorsSuccess = (authors) => {
  return { type: actionTypes.LOAD_AUTHORS_SUCCESS, authors };
};

const loadAuthors = () => {
  return function (dispatch) {
    dispatch(beginApiCall());
    return authorApi
      .getAuthors()
      .then((authors) => {
        dispatch(loadAuthorsSuccess(authors));
      })
      .catch((error) => {
        throw error;
      });
  };
};

export { loadAuthors, loadAuthorsSuccess };
