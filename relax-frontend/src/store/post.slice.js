import { createSlice } from "@reduxjs/toolkit";
import API from "src/axios/axios";
import { postStoreAction } from "./store";

const initialState = {
  isPostDataLoaded: false,
  postData: [],
  reRunPostComponent: true,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getData(state, action) {
      state.isPostDataLoaded = true;
      state.postData = action.payload.post;
    },
  },
});

export default postSlice;

export const getPostData = (param = "") => {
  return (dispatch) => {
    let url = "posts/get-posts";
    if (param) {
      url = `posts/get-posts?${param}`;
    }
    API.get(url)
      .then((response) => {
        if (response.data.http_status === 200) {
          dispatch(postStoreAction.getData({ post: response.data.data }));
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};
