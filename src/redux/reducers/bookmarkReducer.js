import { initialState } from "./initialState";
import {
  ADD_TO_BOOKMARK,
  REMOVE_FROM_BOOKMARK,
  SET_INITIAL_BOOKMARK,
} from "../actions/bookmarkAction";

const bookmarkReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIAL_BOOKMARK:
      return {
        ...state,
        bookmarkedData: action.payload,
      };
    case ADD_TO_BOOKMARK:
      localStorage.setItem(
        "bookmarkedDataList",
        JSON.stringify([...state.bookmarkedData, action.payload])
      );
      return {
        ...state,
        bookmarkedData: [...state.bookmarkedData, action.payload],
      };

    case REMOVE_FROM_BOOKMARK:
      localStorage.setItem(
        "bookmarkedDataList",
        JSON.stringify(
          state.bookmarkedData.filter((bookmarkedItem) => {
            return bookmarkedItem.id !== action.payload.id;
          })
        )
      );
      return {
        ...state,
        bookmarkedData: state.bookmarkedData.filter((bookmarkedItem) => {
          return bookmarkedItem.id !== action.payload.id;
        }),
      };

    default:
      return state;
  }
};

export default bookmarkReducer;
