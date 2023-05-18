let initialState = {
  allData: {},
};

function dataReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_DATA_SUCCESS":
      return {
        ...state,
        allData: payload.allData,
        fourData: payload.fourData,
      };
    default:
      return { ...state };
  }
}

export default dataReducer;
