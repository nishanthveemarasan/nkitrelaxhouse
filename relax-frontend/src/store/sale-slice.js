import { createSlice } from "@reduxjs/toolkit";
import API from "src/axios/axios";
import { saleStoreAction } from "./store";

const initialState = {
  isDataLoaded: false,
  saleData: [],
  reRunComponent: true,
  saleModalData: {
    isLoading: false,
    saleId: 0,
    actionType: "",
    isModalOpen: false,
    modalHeading: "",
    modalAction: "",
    variant: "",
  },
};

const saleSlice = createSlice({
  name: "sale",
  initialState,
  reducers: {
    getData(state, action) {
      state.isDataLoaded = true;
      state.saleData = action.payload.sale;
    },
    loadModalInitialData(state, action) {
      state.saleModalData = {
        isLoading: true,
        saleId: action.payload.id,
        actionType: action.payload.action,
      };
    },
    loadSaleModal(state, action) {
      state.saleModalData = {
        isLoading: false,
        modalData: action.payload.saleDetails,
        saleId: action.payload.id,
        isModalOpen: true,
        modalHeading: action.payload.heading,
        modalAction: action.payload.actionType,
        variant: action.payload.variant,
      };
      console.log(state.saleModalData);
    },
    closeModal(state) {
      state.saleModalData = {
        isLoading: false,
        saleId: 0,
        actionType: "",
        isModalOpen: false,
        modalHeading: "",
        modalAction: "",
        variant: "",
      };
    },
  },
});
export default saleSlice;

export const getSaleData = (param = "") => {
  return (dispatch) => {
    let url = "order/get-order-data";
    if (param) {
      url = `order/get-order-data?${param}`;
    }
    API.get(url)
      .then((response) => {
        if (response.data.http_status === 200) {
          dispatch(saleStoreAction.getData({ sale: response.data.data }));
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};

export const getSaleModalData = (data) => {
  return (dispatch) => {
    dispatch(
      saleStoreAction.loadModalInitialData({
        id: data.id,
        action: data.action,
      })
    );
    dispatch(
      saleStoreAction.loadSaleModal({
        id: data.id,
        saleDetails: data.saleData,
        heading:
          data.action === "Update" ? "Update the Order" : "Cancel The Order",
        actionType: data.action === "Update" ? "Update" : "Cancel",
        variant: data.action === "Update" ? "primary" : "danger",
      })
    );
  };
};

export const closeSaleModal = () => {
  return (dispatch) => {
    dispatch(saleStoreAction.closeModal());
  };
};
