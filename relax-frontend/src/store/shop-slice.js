import { createSlice } from "@reduxjs/toolkit";
import { getApi, sendGetAdminApi } from "src/service/appService";
import { getUrl } from "src/service/customService";
import { shopStoreAction } from "./store";

const initialState = {
  shop: {
    product: [],
    isDataReceived: false,
    param: "",
    productId: 0,
  },

  reRunComponent: {
    isDataChanged: true,
  },
  singaleProductData: {
    data: "",
  },
  order: {
    data: [],
    isDataReceived: false,
    param: "",
    status: "all",
    method: "all",
    orderStatus: "all",
  },
  singleOrderData: {
    data: "",
  },
  orderIdArray: {
    data: [],
  },
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    sendRequest(state) {
      state.shop = {
        ...state.shop,
        isDataReceived: false,
      };
    },
    getStoreProduct(state, action) {
      state.shop = {
        ...state.shop,
        product: action.payload.data,
      };
    },
    getResponse(state) {
      state.shop = {
        ...state.shop,
        isDataReceived: true,
      };
    },
    updateParam(state, action) {
      state.shop = {
        ...state.shop,
        param: action.payload.param,
      };
    },
    getSingleProductData(state, action) {
      state.singaleProductData = {
        data: action.payload.data,
      };
    },
    updateProductId(state, action) {
      state.shop = {
        ...state.shop,
        productId: action.payload.id,
      };
      console.log(state.shop);
    },
    sendProductOrderRequest(state) {
      state.order = {
        ...state.order,
        isDataReceived: false,
      };
    },
    UpdateStoreOrderData(state, action) {
      state.order = {
        ...state.order,
        isDataReceived: true,
        data: action.payload.data,
      };
    },
    updateOrderParam(state, action) {
      state.order = {
        ...state.order,
        param: action.payload.param,
      };
    },
    getSingleOrder(state, action) {
      state.singleOrderData = {
        ...state.singleOrderData,
        data: action.payload.data,
      };
    },
    updatePayStatus(state, action) {
      state.order = {
        ...state.order,
        status: action.payload.status,
      };
    },
    updatePayMethod(state, action) {
      state.order = {
        ...state.order,
        method: action.payload.method,
      };
    },
    updateDeliveryStatus(state, action) {
      state.order = {
        ...state.order,
        deliveryStatus: action.payload.status,
      };
      console.log(state.order);
    },
    updateOrderIdArray(state, action) {
      state.orderIdArray = {
        data: action.payload.data,
      };
    },
    clearOrderIdArray(state) {
      state.orderIdArray = {
        data: [],
      };
    },
  },
});
export default shopSlice;

export const getStoreProductData = (param) => {
  return async (dispatch) => {
    dispatch(shopStoreAction.sendRequest());
    try {
      const url = getUrl(`store/get-products/6`, param);
      const response = await getApi(url);
      dispatch(
        shopStoreAction.getStoreProduct({
          data: response.data.data,
        })
      );
      dispatch(shopStoreAction.getResponse());
    } catch (error) {
      console.log(error.response);
    }
  };
};
export const getStoreOrderData = (
  param,
  ordertatus,
  method,
  deliveryStatus
) => {
  return async (dispatch) => {
    dispatch(shopStoreAction.sendProductOrderRequest());
    const url = getUrl(
      `store/order-data/${ordertatus}/${method}/${deliveryStatus}`,
      param
    );
    try {
      const response = await sendGetAdminApi(url);
      dispatch(
        shopStoreAction.UpdateStoreOrderData({
          data: response.data.data,
        })
      );
    } catch (error) {
      console.log(error.response);
    }
  };
};

export const getAllOrderIds = (id) => {
  return async (dispatch) => {
    try {
      const response = await sendGetAdminApi(`store/get-order-id/${id}`);
      dispatch(
        shopStoreAction.updateOrderIdArray({ data: response.data.data })
      );
    } catch (error) {
      console.log(error.response);
    }
  };
};
export const getStoreProductById = (id) => {
  return async (dispatch) => {
    dispatch(shopStoreAction.sendProductOrderRequest());
    try {
      const response = await sendGetAdminApi(`store/get-order-details/${id}`);
      dispatch(
        shopStoreAction.UpdateStoreOrderData({
          data: response.data,
        })
      );
    } catch (error) {
      console.log(error.response);
    }
  };
};
export const getProductDetails = (id) => {
  return async (dispatch) => {
    try {
      const response = await sendGetAdminApi(`store/get-product-details/${id}`);
      dispatch(
        shopStoreAction.getSingleProductData({
          data: response.data.data,
        })
      );
    } catch (error) {
      console.log(error.response);
    }
  };
};
