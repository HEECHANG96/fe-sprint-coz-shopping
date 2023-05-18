import api from "../api";

function getData() {
  return async (dispatch) => {
    const getAllDataApi = await api.get("/products");
    const getFourDataApi = await api.get("/products?count=4");
    let [allData, fourData] = await Promise.all([
      getAllDataApi,
      getFourDataApi,
    ]);
    dispatch({
      type: "GET_DATA_SUCCESS",
      payload: { allData: allData.data, fourData: fourData.data },
    });
  };
}

export const dataAction = {
  getData,
};
