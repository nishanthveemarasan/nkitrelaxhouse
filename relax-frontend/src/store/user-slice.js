import { createSlice } from "@reduxjs/toolkit";
import API from "src/axios/axios";
import { sendGetAdminApi, sendPostAdminApi } from "src/service/appService";
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
  likes: {
    data: [],
    param: "",
    isDataLoaded: false,
  },

  jobModal: {
    id: 0,
    details: "",
    isModalOpen: false,
    isLoading: false,
    isDataUpdated: false,
    msg: "",
    color: "",
  },
  addressModal: {
    details: "",
    isModalOpen: false,
    isDataChanged: false,
  },
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    openJobModal(state, action) {
      state.jobModal = {
        ...state.jobModal,
        id: action.payload.id,
        details: action.payload.jobData,
        isModalOpen: true,
      };
    },
    openAddressModal(state, action) {
      state.addressModal = {
        ...state.addressModal,
        details: action.payload.data,
        isModalOpen: true,
        isDataChanged: true,
      };
      //  console.log(state.addressModal);
    },
    closeAddressModal(state) {
      state.addressModal = {
        details: "",
        isModalOpen: false,
      };
    },
    closeJobModal(state) {
      state.jobModal = {
        id: 0,
        details: "",
        isModalOpen: false,
        isLoading: false,
        msg: "",
        color: "",
      };
    },
    sendJobData(state) {
      state.jobModal = {
        ...state.jobModal,
        isLoading: true,
        isDataUpdated: false,
      };
      state.reRunComponent = {
        ...state.reRunComponent,
        isDataChanged: false,
      };
    },
    updateJobData(state, action) {
      state.reRunComponent = {
        ...state.reRunComponent,
        isDataChanged: action.payload.isDataChanged,
      };

      state.jobModal = {
        ...state.jobModal,
        isLoading: false,
        isDataUpdated: true,
        msg: action.payload.msg,
        color: action.payload.color,
      };
    },
    getData(state, action) {
      state.isUserDataLoaded = true;
      state.userData = action.payload.user;
    },
    getLikeData(state, action) {
      state.likes = {
        ...state.likes,
        data: action.payload.data,
        isDataLoaded: true,
      };
    },
    updateUserId(state, action) {
      state.reRunComponent = {
        ...state.reRunComponent,
        postId: action.payload.userId,
      };
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
    sendPostAdminApi("users/edit-user-role", data)
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
    sendPostAdminApi("users/disable-a-user", data)
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

export const getPostLikeData = (data) => {
  return (dispatch) => {
    const url = getUrl("likes/liked-posts", data.param);
    //console.log(url);
    sendGetAdminApi(url)
      .then((response) => {
        dispatch(userStoreAction.getLikeData({ data: response.data.data }));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};

export const updateJobModalData = (data) => {
  return async (dispatch) => {
    dispatch(userStoreAction.sendJobData());
    try {
      const response = await sendPostAdminApi("users/update-job-info", data);
      console.log(response.data);
      dispatch(
        userStoreAction.updateJobData({
          msg: response.data.data.msg,
          color: "success",
          isDataChanged: true,
        })
      );
      setTimeout(() => {
        dispatch(userStoreAction.closeJobModal());
      }, 600);
    } catch (error) {
      let valError = error.response.data.error;
      if (error.response.data.error.emp_number[0]) {
        valError = error.response.data.error.emp_number[0];
      }
      dispatch(
        userStoreAction.updateJobData({
          msg: valError,
          color: "danger",
          isDataChanged: false,
        })
      );
    }
  };
};
