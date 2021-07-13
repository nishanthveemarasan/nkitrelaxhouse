import { createSlice } from "@reduxjs/toolkit";
import API from "src/axios/axios";
import { productStoreAction } from "./store";

const initialState = {
  isDataChanged: false,
  productData: [],
  reRunData: true,
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
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getData(state, action) {
      state.isDataChanged = true;
      state.productData = action.payload.data;
    },
    dataChanged(state) {
      state.reRunData = true;
    },
    dataNotChanged(state) {
      state.reRunData = false;
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
  },
});
export default productSlice;

export const getProductData = (param = "") => {
  return (dispatch) => {
    let url = "get-all-chairs";
    if (param) {
      url = `get-all-chairs?${param}`;
    }
    API.get(url)
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
