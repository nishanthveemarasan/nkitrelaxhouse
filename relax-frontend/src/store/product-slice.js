import { createSlice } from "@reduxjs/toolkit";
import API from "src/axios/axios";
import { sendGetAdminApi } from "src/service/appService";
import { getUrl } from "src/service/customService";
import { productStoreAction } from "./store";

const initialState = {
  isDataChanged: false,
  productData: [],
  reRunData: {
    isDataChanged: true,
    queryParam: "",
  },
  modalActionData: "",
  isLoading: false,
  modalData: {
    isModalOpen: false,
    productId: 0,
    modalAction: "",
    modalHeading: "",
    variant: "",
  },
  openModal: false,
  initialLoad: {
    loading: false,
    action: "",
    id: 0,
  },
  updateData: {
    isLoading: false,
    dataUpdated: false,
    msg: "",
    color: "",
  },
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getData(state, action) {
      state.isDataChanged = true;
      state.productData = action.payload.data;
    },
    updateParam(state, action) {
      state.reRunData = {
        ...state.reRunData,
        queryParam: action.payload.param,
      };
    },
    dataChanged(state) {
      state.reRunData = {
        ...state.reRunData,
        isDataChanged: true,
      };
    },
    dataNotChanged(state) {
      state.reRunData = {
        ...state.reRunData,
        isDataChanged: false,
      };
    },
    modalOpen(state, action) {
      state.modalData = {
        isModalOpen: true,
        productId: action.payload.id,
        modalAction: action.payload.action,
        modalHeading: action.payload.heading,
        variant: action.payload.variant,
        data: action.payload.tableData,
      };
    },
    modalClose(state) {
      state.modalData = {
        isModalOpen: false,
        productId: 0,
        modalAction: "",
        modalHeading: "",
      };
      state.initialLoad = {
        loading: false,
        action: "",
        id: 0,
      };
      state.updateData = {
        isLoading: false,
        dataUpdated: false,
        msg: "",
        color: "",
      };
    },
    isDataLoading(state) {
      state.isLoading = true;
    },
    dataIsLoaded(state) {
      state.isLoading = false;
    },
    addProductModal(state, action) {
      state.openModal = action.payload.data;
    },
    getModal(state, action) {
      state.initialLoad = {
        loading: action.payload.value,
        action: action.payload.type,
        id: action.payload.id,
      };
    },
    initiateUpdateData(state) {
      state.reRunData = {
        ...state.reRunData,
        isDataChanged: false,
      };
      state.updateData = {
        ...state.updateData,
        isLoading: true,
        dataUpdated: false,
      };
    },
    DataIsUpdated(state, action) {
      state.reRunData = {
        ...state.reRunData,
        isDataChanged: true,
      };
      state.updateData = {
        ...state.updateData,
        isLoading: false,
        dataUpdated: true,
        msg: action.payload.msg,
        color: action.payload.color,
      };
    },
  },
});
export default productSlice;

export const getProductData = (data) => {
  return (dispatch) => {
    const url = getUrl("get-all-chairs", data.param);
    sendGetAdminApi(url)
      .then((response) => {
        if (response.data.http_status === 200) {
          dispatch(productStoreAction.getData({ data: response.data.data }));
        }
      })
      .catch();
  };
};

export const getModalData = (data) => {
  return (dispatch) => {
    dispatch(
      productStoreAction.getModal({
        id: data.id,
        value: true,
        type: data.action,
      })
    );
    API.get(`get-product-details/${data.id}`)
      .then((response) => {
        if (response.data.http_status === 200) {
          const output = {
            id: data.id,
            action: data.action,
            heading:
              data.action === "Update"
                ? "Update the Product"
                : "Delete the Product",
            variant: data.action === "Update" ? "primary" : "danger",
            tableData: response.data.data[0],
          };
          dispatch(
            productStoreAction.getModal({
              id: data.id,
              value: false,
              type: data.action,
            })
          );
          dispatch(productStoreAction.modalOpen(output));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // } else if (data.action === "Delete") {
  //   return (dispatch) => {
  //     dispatch(
  //       productStoreAction.getModal({
  //         id: data.id,
  //         value: true,
  //         type: data.action,
  //       })
  //     );
  //     const output = {
  //       id: data.id,
  //       action: data.action,
  //       heading: "Delete the Product",
  //       variant: "danger",
  //       tableData: "",
  //     };
  //     dispatch(productStoreAction.modalOpen(output));
  //   };
  // }
};

export const updateProductData = (data) => {
  return (dispatch) => {
    dispatch(productStoreAction.initiateUpdateData());
    API.post("edit-product-details", data).then((response) => {
      console.log(response.data.data.msg);
      dispatch(
        productStoreAction.DataIsUpdated({
          msg: response.data.data.msg,
          color: "success",
        })
      );
    });
  };
};
