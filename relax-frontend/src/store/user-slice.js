import { createSlice } from "@reduxjs/toolkit";
import API from "src/axios/axios";
import { userStoreAction } from "./store";

const initialState = {
  isUserDataLoaded: false,
  userData: [],
  reRunComponent: true,
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
      state.reRunComponent = false;
    },
    dataUpdated(state, action) {
      state.reRunComponent = true;
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
