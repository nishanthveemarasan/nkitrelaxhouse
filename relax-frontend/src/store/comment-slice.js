import { createSlice } from "@reduxjs/toolkit";
import { sendGetAdminApi } from "src/service/appService";
import { getUrl } from "src/service/customService";
import { commentStoreAction } from "./store";

const initialState = {
  tableData: {
    data: [],
    isDataLoaded: false,
  },
  reRunComponent: {
    isDataChanged: true,
    queryParam: "",
  },
  filterComment: {
    userId: "all",
  },
};

const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    getAllCommentData(state, action) {
      state.tableData = {
        data: action.payload.data,
        isDataLoaded: true,
      };
    },
    sendInitialRequest(state) {
      state.tableData = {
        ...state.tableData,
        isDataLoaded: false,
      };
    },
    updateParam(state, action) {
      state.reRunComponent = {
        ...state.reRunComponent,
        queryParam: action.payload.param,
      };
    },
    updateFilterComment(state, action) {
      state.filterComment = {
        userId: action.payload.userId,
      };
    },
  },
});
export default commentSlice;

export const getCommentData = (data) => {
  return (dispatch) => {
    dispatch(commentStoreAction.sendInitialRequest());
    const url = getUrl(`comments/get-comments/${data.id}`, data.param);
    sendGetAdminApi(url)
      .then((response) => {
        dispatch(
          commentStoreAction.getAllCommentData({
            data: response.data.data,
          })
        );
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};
export const getPostCommentData = (id) => {
  return (dispatch) => {
    sendGetAdminApi(`comments/get-post-comment/${id}`)
      .then((response) => {
        const data = {
          data: response.data.data,
          type: "success",
        };
        console.log(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};
