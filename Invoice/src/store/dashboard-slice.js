import { createSlice } from "@reduxjs/toolkit";
import API from "src/axios/axios";
import { sendGetAdminApi } from "src/service/appService";
import { dashboardStoreAction } from "./store";

const initialState = {
  isDataChanged: false,
  widget: [{ users: "0" }, { posts: "0" }, { comments: "0" }, { product: "0" }],
  topOrders: [],
  recentOrders: [],
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    getWidgetData(state, action) {
      state.isDataChanged = true;
      state.widget = [
        { users: action.payload.users.toString() },
        { posts: action.payload.posts.toString() },
        { comments: action.payload.comments.toString() },
        { product: action.payload.totalProducts.toString() },
      ];
      state.topOrders = action.payload.topOrders;
      state.recentOrders = action.payload.recentOrders;
    },
  },
});

export default dashboardSlice;

export const getWidgetData = () => {
  return (dispatch) => {
    sendGetAdminApi("get-dashboard-data")
      .then((response) => {
        if (response.data.http_status === 200) {
          dispatch(dashboardStoreAction.getWidgetData(response.data.data));
        }
        // console.log(response.data.data);
      })
      .catch((error) => console.log(error));
  };
};
