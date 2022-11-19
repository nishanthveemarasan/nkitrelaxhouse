import { createSlice } from "@reduxjs/toolkit";
import { sendGetAdminApi, sendPostAdminApi } from "src/service/appService";
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
  commentModal: {
    id: 0,
    isModalOpen: false,
    modalHeading: "",
    modalAction: "",
    isLoading: false,
    isDataUpdated: false,
    modalBody: "",
    msg: "",
    color: "",
  },

  showContentModel: {
    isModalOpen: false,
    ModalHeading: "Show Comment Content",
    modalAction: false,
    content: "",
  },
};

const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    openCommentContent(state, action) {
      state.showContentModel = {
        ...state.showContentModel,
        content: action.payload.content,
        isModalOpen: true,
      };
    },
    closeCommentContent(state) {
      state.showContentModel = {
        isModalOpen: false,
        ModalHeading: "Show Comment Content",
        modalAction: false,
        content: "",
      };
    },
    openCommentModal(state, action) {
      state.commentModal = {
        ...state.commentModal,
        id: action.payload.id,
        isModalOpen: true,
        modalHeading: action.payload.heading,
        modalAction: action.payload.action,
        color: action.payload.color,
        modalBody: action.payload.body,
      };
    },

    sendCommentStatusRequest(state) {
      state.reRunComponent = {
        ...state.reRunComponent,
        isDataChanged: false,
      };
      state.commentModal = {
        ...state.commentModal,
        isLoading: true,
      };
    },
    getstatusResponse(state, action) {
      state.reRunComponent = {
        ...state.reRunComponent,
        isDataChanged: true,
      };
      state.commentModal = {
        ...state.commentModal,
        isLoading: false,
        modalAction: "",
        color: action.payload.color,
        modalBody: action.payload.msg,
        isDataUpdated: action.payload.status === "success" ? true : false,
      };
    },
    closeCommentModal(state) {
      state.commentModal = {
        id: 0,
        isModalOpen: false,
        modalHeading: "",
        modalAction: "",
        isLoading: false,
        isDataUpdated: false,
        modalBody: "",
        msg: "",
        color: "",
      };
    },
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

export const changeCommentStatus = (data) => {
  return (dispatch) => {
    console.log(data);
    dispatch(commentStoreAction.sendCommentStatusRequest());
    sendPostAdminApi("comments/update-comment", data)
      .then((response) => {
        dispatch(
          commentStoreAction.getstatusResponse({
            msg: response.data.data.msg,
            status: "success",
            color: "success",
          })
        );
      })
      .catch((error) => {
        dispatch(
          commentStoreAction.getstatusResponse({
            msg: error.response.data.msg,
            color: "danger",
            status: "failed",
          })
        );
      });
  };
};
