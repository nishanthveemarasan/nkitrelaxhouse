import { createSlice } from "@reduxjs/toolkit";
import API from "src/axios/axios";
import { sendGetAdminApi } from "src/service/appService";
import { getUrl } from "src/service/customService";
import { userStoreAction } from "./store";

const initialState = {
  isUserDataLoaded: false,
  userData: [],
  reRunComponent: {
    isDataChanged: true,
    queryParam: "",
    postId: "all",
  },
  userModalData: {
    userRoles: ["Admin", "User"],
    userId: 0,
    actionType: "",
    isModalOpen: false,
    modalHeading: "",
    modalAction: "",
    variant: "",
    userRole: "",
    userStatus: "",
  },
  updateUserData: {
    isLoading: false,
    isDataUpdated: false,
    msg: "",
    color: "",
  },
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getData(state, action) {
      state.isUserDataLoaded = true;
      state.userData = action.payload.user;
    },
    updateUserId(state, action) {
      state.reRunComponent = {
        ...state.reRunComponent,
        postId: action.payload.userId,
      };
      console.log(state.reRunComponent);
    },
    updateParam(state, action) {
      state.reRunComponent = {
        ...state.reRunComponent,
        queryParam: action.payload.param,
      };
    },
    openUserModal(state, action) {
      state.userModalData = {
        ...state.userModalData,
        isModalOpen: true,
        userId: action.payload.id,
        userRole: action.payload.userRole,
        userStatus: action.payload.userStatus,
        actionType: action.payload.actionType,
        modalHeading: action.payload.heading,
        variant: action.payload.variant,
        modalAction: action.payload.modalAction,
      };
    },
    updatingData(state) {
      state.updateUserData = {
        ...state.updateUserData,
        isLoading: true,
        isDataUpdated: false,
      };
      state.reRunComponent = {
        ...state.reRunComponent,
        isDataChanged: false,
      };
    },
    dataUpdated(state, action) {
      state.reRunComponent = {
        ...state.reRunComponent,
        isDataChanged: true,
      };
      state.updateUserData = {
        isLoading: false,
        isDataUpdated: true,
        msg: action.payload.msg,
        color: action.payload.color,
      };
    },
    closeModal(state) {
      state.userModalData = {
        userRoles: ["Admin", "User"],
        userId: 0,
        actionType: "",
        isModalOpen: false,
        modalHeading: "",
        modalAction: "",
        variant: "",
        userRole: "",
        userStatus: "",
      };
      state.updateUserData = {
        isLoading: false,
        isDataUpdated: false,
        msg: "",
        color: "",
      };
    },
  },
});
export default userSlice;

export const getUserData = (data) => {
  return (dispatch) => {
    const url = getUrl("users/get-users", data.param);
    sendGetAdminApi(url)
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

export const getUserModalData = (data) => {
  return (dispatch) => {
    const button = data.userStatus === "1" ? "Disable" : "Enable";
    dispatch(
      userStoreAction.openUserModal({
        id: data.id,
        actionType: data.action,
        userRole: data.userRole,
        userStatus: data.userStatus,
        modalAction: data.action === "assign" ? "Assign Role" : button,
        heading:
          data.action === "assign"
            ? "Assign Role to the User"
            : "Enable/Disable the User",
        variant: data.action === "assign" ? "primary" : "danger",
      })
    );
  };
};

export const editUserRole = (data) => {
  return (dispatch) => {
    dispatch(userStoreAction.updatingData());
    API.post("users/edit-user-role", data)
      .then((response) => {
        dispatch(
          userStoreAction.dataUpdated({
            msg: response.data.data.msg,
            color: "success",
          })
        );
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

export const disableUser = (data) => {
  return (dispatch) => {
    dispatch(userStoreAction.updatingData());
    API.post("users/disable-a-user", data)
      .then((response) => {
        dispatch(
          userStoreAction.dataUpdated({
            msg: response.data.data.msg,
            color: "success",
          })
        );
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

export const closeUserModal = () => {
  return (dispatch) => {
    dispatch(userStoreAction.closeModal());
  };
};
