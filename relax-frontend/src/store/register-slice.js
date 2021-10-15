import { createSlice } from "@reduxjs/toolkit";
import API from "src/axios/axios";
import { sendPostApi } from "src/service/appService";
import { registerStoreAction } from "./store";

const initialState = {
  isLoading: false,
  message: {
    msg: [],
    color: "",
    status: false,
    isRegistered: false,
  },
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    sendRequest(state) {
      state.isLoading = true;
    },
    getResponse(state, action) {
      state.isLoading = false;
      state.message = {
        ...state.message,
        msg: action.payload.data,
        status: action.payload.status,
        color: action.payload.color,
        isRegistered: true,
      };
    },
  },
});
export default registerSlice;

export const registerData = (data) => {
  return (dispatch) => {
    dispatch(registerStoreAction.sendRequest());
    sendPostApi("users/create", data)
      .then((response) => {
        const array = [response.data.data.msg];
        dispatch(
          registerStoreAction.getResponse({
            data: array,
            status: true,
            color: "success",
          })
        );
      })
      .catch((error) => {
        let array = [];
        for (let key in error.response.data.error) {
          array.push(error.response.data.error[key][0]);
        }
        dispatch(
          registerStoreAction.getResponse({
            data: array,
            status: false,
            color: "danger",
          })
        );
      });
  };
};
