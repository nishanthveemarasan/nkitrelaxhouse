import { configureStore } from "@reduxjs/toolkit";
import dashboardSlice from "./dashboard-slice";
import productSlice from "./product-slice";
import providerSlice from "./provider-slice";
import responsiveSlice from "./responsive-slice";

const store = configureStore({
  reducer: {
    responsiveStore: responsiveSlice.reducer,
    providerStore: providerSlice.reducer,
    dashboardStore: dashboardSlice.reducer,
    productStore: productSlice.reducer,
  },
});

export const responsiveStoreAction = responsiveSlice.actions;
export const providerStoreAction = providerSlice.actions;
export const dashboardStoreAction = dashboardSlice.actions;
export const productStoreAction = productSlice.actions;
export default store;
