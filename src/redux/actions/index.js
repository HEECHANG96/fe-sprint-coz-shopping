export const ADD_TO_BOOKMARK = "ADD_TO_BOOKMARK";

// actions creator functions
export const addToBookmark = (itemId) => {
  return {
    type: ADD_TO_BOOKMARK,
    payload: {
      quantity: 1,
      itemId,
    },
  };
};
