import { createSlice } from "@reduxjs/toolkit";
import { getProductApi, searchApi } from "src/service/appService";
import { itemStoreAction } from "./store";

const initialState = {
  products: [],
  isPageLoading: false,
  isButtonLoading: false,
  isDataChanged: true,
  itemCode: [],
  row: 10,
};

const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    getResponse(state, action) {
      state.products = action.payload.items;
      state.isPageLoading = true;
    },
    sendRequest(state) {
      state.isPageLoading = false;
    },
  },
});
export default itemSlice;

export const getItemData = (url, row) => {
  return (dispatch) => {
    getProductApi(url, row)
      .then((response) => {
        dispatch(
          itemStoreAction.getResponse({
            items: response.data.data,
          })
        );
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

export const searchItems = (searchString) => {
  return (dispatch) => {
    if (!searchString) {
      dispatch(itemStoreAction.sendRequest());
      dispatch(getItemData("", 10));
    } else {
      dispatch(itemStoreAction.sendRequest());
      searchApi("get-search-details", searchString)
        .then((response) => {
          console.log(response.data.data);
          dispatch(
            itemStoreAction.getResponse({
              items: response.data.data,
            })
          );
        })
        .catch();
    }
  };
};
