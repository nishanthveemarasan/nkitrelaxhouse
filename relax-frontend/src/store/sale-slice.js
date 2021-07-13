import { createSlice } from "@reduxjs/toolkit";
import API from "src/axios/axios";
import { saleStoreAction } from "./store";

const initialState = {
  isDataLoaded: false,
  saleData: [],
  reRunComponent: true,
};

const saleSlice = createSlice({
  name: "sale",
  initialState,
  reducers: {
    getData(state, action) {
      state.isDataLoaded = true;
      state.saleData = action.payload.sale;
    },
  },
});
export default saleSlice;

export const getSaleData = (param = "") => {
  return (dispatch) => {
    let url = "order/get-order-data";
    if (param) {
      url = `order/get-order-data?${param}`;
    }
    API.get(url)
      .then((response) => {
        if (response.data.http_status === 200) {
          dispatch(saleStoreAction.getData({ sale: response.data.data }));
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};
