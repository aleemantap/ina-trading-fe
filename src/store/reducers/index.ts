// // src/lib/store.ts
"use client";

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authSlice";
import productReducer from "./product/productSlice";
import productDetailReducer from "./product/productDetailSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    productDetail: productDetailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
