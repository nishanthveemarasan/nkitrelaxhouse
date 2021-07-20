import { createSlice } from "@reduxjs/toolkit";
import API from "src/axios/axios";
import { postStoreAction } from "./store";

const initialState = {
  isPostDataLoaded: false,
  postData: [],
  reRunPostComponent: true,
  postModalData: {
    postData: "",
    postId: 0,
    ModalHeading: "",
    ModalAction: "",
    isModalOpen: false,
    variant: "",
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
    sendingAddPostData(state) {
      state.addPostModalData = {
        ...state.addPostModalData,
        isLoading: true,
      };
      state.reRunPostComponent = false;
    },
    AddPostCreatedData(state, action) {
      state.addPostModalData = {
        ...state.addPostModalData,
        isLoading: false,
      };
      state.reRunPostComponent = true;
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
    openPostEditModal(state, action) {
      state.postModalData = {
        postData: action.payload.postData,
        postId: action.payload.id,
        ModalAction: action.payload.action,
        isModalOpen: true,
        ModalHeading:
          action.payload.action === "Update"
            ? "Update the Post"
            : "Delete the post",
        variant: action.payload.action === "Update" ? "primary" : "danger",
      };
    },
    updatingModalData(state) {
      state.updatePostModalData = {
        ...state.updatePostModalData,
        isLoading: true,
        isUpdated: false,
      };
      state.reRunPostComponent = false;
    },
    postDataUpdated(state, action) {
      state.updatePostModalData = {
        isLoading: false,
        isUpdated: true,
        msg: action.payload.msg,
        variant: action.payload.color,
      };
      state.reRunPostComponent = true;
    },
    closeModal(state) {
      state.postModalData = {
        postData: "",
        postId: 0,
        ModalHeading: "",
        ModalAction: "",
        isModalOpen: false,
        variant: "",
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

export const openPostModal = (data) => {
  return (dispatch) => {
    dispatch(postStoreAction.openPostEditModal(data));
  };
};

export const updatePostModalData = (data) => {
  return (dispatch) => {
    dispatch(postStoreAction.updatingModalData());
    API.post("posts/edit", data)
      .then((response) => {
        dispatch(
          postStoreAction.postDataUpdated({
            msg: response.data.data.msg,
            color: "success",
          })
        );
      })
      .catch((error) => {
        dispatch(
          postStoreAction.postDataUpdated({
            msg: error.response.data.msg,
            color: "danger",
          })
        );
      });
  };
};
export const deletePostModalData = (data) => {
  return (dispatch) => {
    dispatch(postStoreAction.updatingModalData());
    API.get(`posts/delete/${data.id}`)
      .then((response) => {
        dispatch(
          postStoreAction.postDataUpdated({
            msg: response.data.data.msg,
            color: "success",
          })
        );
      })
      .catch((error) => {
        dispatch(
          postStoreAction.postDataUpdated({
            msg: error.response.data.msg,
            color: "danger",
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
    console.log(data);
    API.post(`posts/create`, data)
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
