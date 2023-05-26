export const ADD_TO_BOOKMARK = "ADD_TO_BOOKMARK";
export const REMOVE_FROM_BOOKMARK = "REMOVE_FROM_BOOKMARK";
export const SET_INITIAL_BOOKMARK = "SET_INITIAL_BOOKMARK";

// actions creator functions
export const setInitialBookmark = (bookmarkedDataList) => {
  return {
    type: SET_INITIAL_BOOKMARK,
    payload: bookmarkedDataList,
  };
};
export const addToBookmarkedData = (productData) => {
  return {
    type: ADD_TO_BOOKMARK,
    payload: productData,
  };
};

export const removeFromBookmark = (productData) => {
  return {
    type: REMOVE_FROM_BOOKMARK,
    payload: productData,
  };
};
