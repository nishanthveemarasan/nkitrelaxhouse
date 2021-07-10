import { configureStore } from "@reduxjs/toolkit";
import providerSlice from "./provider-slice";
import responsiveSlice from "./responsive-slice";

const store = configureStore({
  reducer: {
    responsiveStore: responsiveSlice.reducer,
    providerStore: providerSlice.reducer,
  },
});

export const responsiveStoreAction = responsiveSlice.actions;
export const providerStoreAction = providerSlice.actions;
export default store;
