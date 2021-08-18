import { createSlice } from "@reduxjs/toolkit";
import { sendGetAdminApi, sendPostApi } from "src/service/appService";
import { loginStoreAction } from "./store";

const initialState = {
  isLoading: false,
  loggedInData: {
    userId: 0,
    name: "",
    token: null,
    role_id: "none",
    isDataReceived: false,
    image: "",
    posts: 0,
    comments: 0,
    likes: 0,
  },
  message: {
    msg: "",
    color: "",
    isLoggedIn: false,
  },
  admin: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout(state) {
      state.loggedInData = {
        userId: "",
        name: "",
        token: null,
        role_id: "none",
        image: "",
        posts: 0,
        comments: 0,
        likes: 0,
      };
      state.message = {
        msg: "",
        color: "",
        isLoggedIn: false,
      };
    },
    updateProfileImage(state, action) {
      state.loggedInData = {
        ...state.loggedInData,
        image: action.payload.url,
      };
    },
    sendLoginRequest(state) {
      state.isLoading = true;
      state.message = {
        ...state.message,
        msg: "Authenticating......",
        color: "success",
        isLoggedIn: true,
      };
    },

    getLoginErrorResponse(state, action) {
      state.isLoading = false;
      state.message = {
        ...state.message,
        msg: action.payload.msg,
        color: action.payload.color,
        isLoggedIn: true,
      };
    },
    getLoginSuccessResponse(state, action) {
      state.isLoading = false;
      state.message = {
        ...state.message,
        msg: action.payload.msg,
        color: action.payload.color,
        isLoggedIn: true,
      };
      state.loggedInData = {
        ...state.loggedInData,
        name: action.payload.name,
        image: action.payload.image,
        role_id: action.payload.role_id,
        posts: action.payload.posts,
        comments: action.payload.comments,
        likes: action.payload.likes,
        userId: action.payload.userId,
      };
    },
    updateToken(state, action) {
      state.loggedInData = {
        ...state.loggedInData,
        token: action.payload.token,
      };
    },
    checkUserLoggedIn(state, action) {
      state.loggedInData = {
        ...state.loggedInData,
        name: action.payload.name,
        role_id: action.payload.role_id,
        isDataReceived: true,
        image: action.payload.image,
        posts: action.payload.posts,
        comments: action.payload.comments,
        likes: action.payload.likes,
        userId: action.payload.userId,
      };
      console.log(state.loggedInData);
    },
  },
});
export default loginSlice;

export const LoginRequest = (data, history) => {
  return (dispatch) => {
    dispatch(loginStoreAction.sendLoginRequest());

    sendPostApi("user/login", data)
      .then((response) => {
        localStorage.setItem("token", response.data.data.token);
        dispatch(
          loginStoreAction.getLoginSuccessResponse({
            msg: "Authentication Successfull:Rediracting to Admin Panel!!",
            color: "success",
            name: response.data.data.name,
            role_id: response.data.data.roles,
            image: response.data.data.profile_photo_path,
            posts: response.data.data.posts,
            comments: response.data.data.comments,
            likes: response.data.data.likes,
            userId: response.data.data.id,
          })
        );
        setTimeout(() => {
          dispatch(
            loginStoreAction.updateToken({
              token: response.data.data.token,
            })
          );
          history.replace("/admin");
        }, 2000);
      })
      .catch((error) => {
        dispatch(
          loginStoreAction.getLoginErrorResponse({
            msg: error.response.data.error,
            color: "danger",
          })
        );
      });
  };
};
export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem("token");
    dispatch(loginStoreAction.logout());
  };
};

export const checkUser = (history) => {
  return (dispatch) => {
    sendGetAdminApi("users/get-a-user")
      .then((response) => {
        //console.log("hi", response.data.data.id);
        dispatch(
          loginStoreAction.checkUserLoggedIn({
            name: response.data.data.name,
            role_id: response.data.data.roles,
            image: response.data.data.profile_photo_path,
            posts: response.data.data.posts_count,
            comments: response.data.data.comments_count,
            likes: response.data.data.likes_count,
            userId: response.data.data.id,
          })
        );
      })
      .catch((error) => {
        history.push("/");
      });
  };
};
