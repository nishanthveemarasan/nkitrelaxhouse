import { createSlice } from "@reduxjs/toolkit";
import API from "src/axios/axios";
import { userStoreAction } from "./store";

const initialState = {
  isUserDataLoaded: false,
  userData: [],
  reRunComponent: true,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getData(state, action) {
      state.isUserDataLoaded = true;
      state.userData = action.payload.user;
    },
  },
});
export default userSlice;

export const getUserData = (param) => {
  return (dispatch) => {
    let url = "users/get-users";
    if (param) {
      url = `users/get-users?${param}`;
    }
    API.get(url)
      .then((response) => {
        if (response.data.http_status === 200) {
          dispatch(userStoreAction.getData({ user: response.data.data }));
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};
