import { ADD_TO_BOOKMARK } from "../actions/index";
import { initialState } from "./initialState";

const bookmarkReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BOOKMARK:
      //TODO
      break;
    default:
      return state;
  }
};

export default bookmarkReducer;
