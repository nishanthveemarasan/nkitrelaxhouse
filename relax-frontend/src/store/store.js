import { configureStore } from "@reduxjs/toolkit";
import commentSlice from "./comment-slice";
import dashboardSlice from "./dashboard-slice";
import itemSlice from "./item-slice";
import postSlice from "./post.slice";
import productSlice from "./product-slice";
import providerSlice from "./provider-slice";
import registerSlice from "./register-slice";
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
    registerStore: registerSlice.reducer,
    itemStore: itemSlice.reducer,
    commentStore: commentSlice.reducer,
  },
});

export const responsiveStoreAction = responsiveSlice.actions;
export const providerStoreAction = providerSlice.actions;
export const dashboardStoreAction = dashboardSlice.actions;
export const productStoreAction = productSlice.actions;
export const saleStoreAction = saleSlice.actions;
export const userStoreAction = userSlice.actions;
export const postStoreAction = postSlice.actions;
export const registerStoreAction = registerSlice.actions;
export const itemStoreAction = itemSlice.actions;
export const commentStoreAction = commentSlice.actions;
export default store;
