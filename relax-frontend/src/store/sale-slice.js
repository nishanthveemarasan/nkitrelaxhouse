import { createSlice } from "@reduxjs/toolkit";
import API from "src/axios/axios";
import { sendGetAdminApi } from "src/service/appService";
import { getUrl } from "src/service/customService";
import { saleStoreAction } from "./store";

const initialState = {
  isDataLoaded: false,
  saleData: [],
  reRunComponent: {
    isDataChanged: true,
    queryParam: "",
  },
  saleModalData: {
    isLoading: false,
    saleId: 0,
    orderData: "",
    actionType: "",
    isModalOpen: false,
    modalHeading: "",
    modalAction: "",
    variant: "",
  },
  updateSaleData: {
    isLoading: false,
    isUpdated: false,
    msg: "",
    variant: "",
  },
  addSaleModalData: {
    isLoading: false,
    latestOrderId: "",
    productNames: [],
    modalHeading: "Add A New Order",
    modalActionButton: "Create",
    isModalOpen: false,
  },
  addOrder: {
    isLoading: false,
    orderCreated: false,
    orderItem: [],
    msg: "",
    color: "",
  },
  refreshORderId: false,
};

const saleSlice = createSlice({
  name: "sale",
  initialState,
  reducers: {
    getData(state, action) {
      state.isDataLoaded = true;
      state.saleData = action.payload.sale;
    },
    updateParam(state, action) {
      state.reRunComponent = {
        ...state.reRunComponent,
        queryParam: action.payload.param,
      };
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
      //console.log(state.saleModalData);
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
      state.updateSaleData = {
        isLoading: false,
        isUpdated: false,
        msg: "",
        variant: "",
      };
      state.addSaleModalData = {
        isLoading: false,
        latestOrderId: "000",
        productNames: [],
        modalHeading: "Add A New Order",
        modalActionButton: "Create",
        isModalOpen: false,
      };
      state.addOrder = {
        isLoading: false,
        orderCreated: false,
        orderItem: [],
        msg: "",
        color: "",
      };
    },
    updatingData(state) {
      state.reRunComponent = {
        ...state.reRunComponent,
        isDataChanged: false,
      };
      state.updateSaleData = {
        ...state.updateSaleData,
        isLoading: true,
      };
    },
    dataUpdated(state, action) {
      state.reRunComponent = {
        ...state.reRunComponent,
        isDataChanged: true,
      };
      state.updateSaleData = {
        isLoading: false,
        isUpdated: true,
        msg: action.payload.msg,
        variant: action.payload.color,
      };
    },
    loadingInitialAddModal(state) {
      state.addSaleModalData = {
        ...state.addSaleModalData,
        isLoading: true,
      };
    },
    getlatestOrderId(state, action) {
      state.addSaleModalData = {
        ...state.addSaleModalData,
        latestOrderId: action.payload.id,
      };
      state.refreshORderId = false;
    },
    getProductNames(state, action) {
      state.addSaleModalData = {
        ...state.addSaleModalData,
        productNames: action.payload.names,
      };
    },
    loadAddModalData(state) {
      state.addSaleModalData = {
        ...state.addSaleModalData,
        isLoading: false,
        isModalOpen: true,
      };
    },
    addOrderItemCart(state, action) {
      const copyOrderList = [...state.addOrder.orderItem, action.payload.data];
      state.addOrder = {
        ...state.addOrder,
        orderItem: copyOrderList,
      };
      // console.log(state.addOrder);
    },
    removeOrderItemCart(state, action) {
      const copyOrderList = state.addOrder.orderItem.slice();
      copyOrderList.splice(action.payload.id, 1);
      state.addOrder = {
        ...state.addOrder,
        orderItem: copyOrderList,
      };
    },
    updateOrderItem(state, action) {
      const id = action.payload.id;
      const copyOrderList = state.addOrder.orderItem.slice();
      copyOrderList[id].quantity = action.payload.quantity;
      state.addOrder = {
        ...state.addOrder,
        orderItem: copyOrderList,
      };
    },
    initiateCreatingOrder(state) {
      state.addOrder = {
        ...state.addOrder,
        isLoading: true,
        orderCreated: false,
      };
    },
    orderCreated(state, action) {
      state.addOrder = {
        ...state.addOrder,
        isLoading: false,
        msg: action.payload.msg,
        color: action.payload.color,
        orderItem: [],
        orderCreated: true,
      };
    },
    dataNotChanged(state) {
      state.reRunComponent = {
        ...state.reRunComponent,
        isDataChanged: false,
      };
    },
    dataChanged(state) {
      state.reRunComponent = {
        ...state.reRunComponent,
        isDataChanged: true,
      };
    },
    refreshOrderLatestId(state) {
      state.refreshORderId = true;
    },
  },
});
export default saleSlice;

export const getSaleData = (data) => {
  return (dispatch) => {
    const url = getUrl("order/get-order-data", data.param);
    sendGetAdminApi(url)
      .then((response) => {
        console.log(response.data.http_status);
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

export const updateSaleData = (data) => {
  return (dispatch) => {
    dispatch(saleStoreAction.updatingData());
    API.post("order/edit-order-data", data)
      .then((response) => {
        dispatch(
          saleStoreAction.dataUpdated({
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

export const openAddOrderModal = () => {
  return (dispatch) => {
    dispatch(saleStoreAction.loadingInitialAddModal());
    API.get("order/get-latest-order-id")
      .then((response) => {
        if (response.data.http_status === 200) {
          const id = response.data.data.order_id;
          dispatch(saleStoreAction.getlatestOrderId({ id }));
        }
      })
      .catch();
    API.get("get-product-names")
      .then((response) => {
        if (response.data.http_status === 200) {
          const names = response.data.data;
          dispatch(saleStoreAction.getProductNames({ names }));
          dispatch(saleStoreAction.loadAddModalData());
        }
      })
      .catch();
  };
};

export const initiateCreateOrder = (data) => {
  return (dispatch) => {
    dispatch(saleStoreAction.initiateCreatingOrder());
    dispatch(saleStoreAction.dataNotChanged());
    API.post("order/create", data).then((response) => {
      dispatch(saleStoreAction.dataChanged());
      if (response.data.http_status === 200) {
        dispatch(
          saleStoreAction.orderCreated({
            msg: response.data.data.msg,
            color: "success",
          })
        );
      }
    });

    // dispatch(
    //   saleStoreAction.orderCreated({
    //     msg: result.msg,
    //     color: "success",
    //   })
    // );
  };
};

export const refreshOrderIdData = () => {
  return (dispatch) => {
    dispatch(saleStoreAction.refreshOrderLatestId());
    API.get("order/get-latest-order-id")
      .then((response) => {
        if (response.data.http_status === 200) {
          const id = response.data.data.order_id;
          dispatch(saleStoreAction.getlatestOrderId({ id }));
        }
      })
      .catch();
  };
};
