import { configureStore } from "@reduxjs/toolkit";
import dashboardSlice from "./dashboard-slice";
import postSlice from "./post.slice";
import productSlice from "./product-slice";
import providerSlice from "./provider-slice";
import responsiveSlice from "./responsive-slice";
import saleSlice from "./sale-slice";
import userSlice from "./user-slice";

const store = configureStore({
  reducer: {
    responsiveStore: responsiveSlice.reducer,
    providerStore: providerSlice.reducer,
    dashboardStore: dashboardSlice.reducer,
    productStore: productSlice.reducer,
    saleStore: saleSlice.reducer,
    userStore: userSlice.reducer,
    postStore: postSlice.reducer,
  },
});

export const responsiveStoreAction = responsiveSlice.actions;
export const providerStoreAction = providerSlice.actions;
export const dashboardStoreAction = dashboardSlice.actions;
export const productStoreAction = productSlice.actions;
export const saleStoreAction = saleSlice.actions;
export const userStoreAction = userSlice.actions;
export const postStoreAction = postSlice.actions;
export default store;
