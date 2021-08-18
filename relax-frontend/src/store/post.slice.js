import { createSlice } from "@reduxjs/toolkit";
import API from "src/axios/axios";
import { sendGetAdminApi, sendPostAdminApi } from "src/service/appService";
import { getUrl } from "src/service/customService";
import { postStoreAction } from "./store";

const initialState = {
  isPostDataLoaded: false,
  postData: [],
  reRunPostComponent: {
    isDataChanged: true,
    queryParam: "",
    id: "all",
  },
  postModalData: {
    postData: "",
    postId: 0,
    ModalHeading: "",
    ModalAction: "",
    isModalOpen: false,
    status: "",
    variant: "",
    showButton: true,
  },
  updatePostModalData: {
    isLoading: false,
    isUpdated: false,
    msg: "",
    variant: "",
  },
  addPostModalData: {
    isLoading: false,
    modalHeading: "Add A New Post",
    modalActionButton: "Create",
    isModalOpen: false,
    variant: "primary",
  },
  singlePostData: {
    data: [],
    isDataReceived: false,
    type: "",
  },
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    openCreateModal(state) {
      state.addPostModalData = {
        ...state.addPostModalData,
        isModalOpen: true,
      };
    },
    updateParam(state, action) {
      state.reRunPostComponent = {
        ...state.reRunPostComponent,
        queryParam: action.payload.param,
      };
    },
    sendSinglePostRequest(state, action) {
      state.singlePostData = {
        ...state.singlePostData,
        isDataReceived: true,
        type: action.payload.type,
      };
    },
    updateSinglePostRequest(state, action) {
      state.singlePostData = {
        ...state.singlePostData,
        isDataReceived: false,
        data: action.payload.data,
      };
    },
    sendingAddPostData(state) {
      state.addPostModalData = {
        ...state.addPostModalData,
        isLoading: true,
      };
      state.reRunPostComponent = {
        ...state.reRunPostComponent,
        isDataChanged: false,
      };
    },
    AddPostCreatedData(state, action) {
      state.addPostModalData = {
        ...state.addPostModalData,
        isLoading: false,
      };
      state.reRunPostComponent = {
        ...state.reRunPostComponent,
        isDataChanged: true,
      };
      state.updatePostModalData = {
        ...state.updatePostModalData,
        isUpdated: true,
        msg: action.payload.msg,
        variant: action.payload.color,
      };
    },
    getData(state, action) {
      state.isPostDataLoaded = true;
      state.postData = action.payload.post;
    },
    sendInitialRequest(state) {
      state.isPostDataLoaded = false;
    },
    openPostEditModal(state, action) {
      state.postModalData = {
        ...state.postModalData,
        postData: action.payload.postData,
        postId: action.payload.id,
        ModalAction: action.payload.action,
        isModalOpen: true,
        status: action.payload.status,
        ModalHeading:
          action.payload.action === "Update"
            ? "Update the Post"
            : "Enable/Disable the post",
        variant:
          action.payload.action === "Update"
            ? "primary"
            : action.payload.status === "active"
            ? "success"
            : "danger",
      };
    },
    updatingModalData(state) {
      state.updatePostModalData = {
        ...state.updatePostModalData,
        isLoading: true,
        isUpdated: false,
      };
      state.reRunPostComponent = {
        ...state.reRunPostComponent,
        isDataChanged: false,
      };
    },
    postDataUpdated(state, action) {
      state.postModalData = {
        ...state.postModalData,
        showButton: action.payload.showButton,
      };
      state.updatePostModalData = {
        isLoading: false,
        isUpdated: true,
        msg: action.payload.msg,
        variant: action.payload.color,
        ModalAction: action.payload.action,
      };
      state.reRunPostComponent = {
        ...state.reRunPostComponent,
        isDataChanged: true,
      };
    },
    closeModal(state) {
      state.postModalData = {
        postData: "",
        postId: 0,
        ModalHeading: "",
        ModalAction: "",
        isModalOpen: false,
        variant: "",
        showButton: true,
      };
      state.updatePostModalData = {
        isLoading: false,
        isUpdated: false,
        msg: "",
        variant: "",
      };
      state.addPostModalData = {
        ...state.addPostModalData,
        isModalOpen: false,
      };
    },
  },
});

export default postSlice;

export const getPostData = (data) => {
  return (dispatch) => {
    dispatch(postStoreAction.sendInitialRequest());
    const url = getUrl(`posts/get-posts/${data.id}`, data.param);
    sendGetAdminApi(url)
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

export const openPostModal = (data) => {
  return (dispatch) => {
    dispatch(postStoreAction.openPostEditModal(data));
  };
};

export const updatePostModalData = (data) => {
  return (dispatch) => {
    dispatch(postStoreAction.updatingModalData());
    sendPostAdminApi("posts/edit", data)
      .then((response) => {
        dispatch(
          postStoreAction.postDataUpdated({
            msg: response.data.data.msg,
            color: "success",
            action: "Update",
            showButton: true,
          })
        );
      })
      .catch((error) => {
        dispatch(
          postStoreAction.postDataUpdated({
            msg: error.response.data.msg,
            color: "danger",
            action: "Update",
            showButton: true,
          })
        );
      });
  };
};
export const deletePostModalData = (data) => {
  return (dispatch) => {
    dispatch(postStoreAction.updatingModalData());
    sendPostAdminApi(`posts/delete`, data)
      .then((response) => {
        dispatch(
          postStoreAction.postDataUpdated({
            msg: response.data.data.msg,
            color: "success",
            showButton: false,
          })
        );
      })
      .catch((error) => {
        dispatch(
          postStoreAction.postDataUpdated({
            msg: error.response.data.msg,
            color: "danger",
            showButton: true,
          })
        );
      });
  };
};

export const closePostModal = () => {
  return (dispatch) => {
    dispatch(postStoreAction.closeModal());
  };
};

export const openAddPostModal = () => {
  return (dispatch) => {
    dispatch(postStoreAction.openCreateModal());
  };
};

export const addPostData = (data) => {
  return (dispatch) => {
    dispatch(postStoreAction.sendingAddPostData());
    sendPostAdminApi(`posts/create`, data)
      .then((response) => {
        const msg = response.data.data.msg;
        dispatch(
          postStoreAction.AddPostCreatedData({
            msg: msg,
            color: "success",
          })
        );
      })
      .catch((error) => {
        console.log(error.response);
        dispatch(
          postStoreAction.AddPostCreatedData({
            msg: error.response.data.error,
            color: "danger",
          })
        );
      });
  };
};

export const getSinglePostData = (id, type) => {
  return (dispatch) => {
    dispatch(postStoreAction.sendSinglePostRequest({ type }));
    sendGetAdminApi(`posts/get-post/${id}`)
      .then((response) => {
        dispatch(
          postStoreAction.updateSinglePostRequest({
            data: response.data.data,
          })
        );
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};
