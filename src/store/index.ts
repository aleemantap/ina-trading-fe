// // src/lib/store.ts
// "use client";

// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "./reducers/authSlice";
// import productReducer from "./reducers/productSlice";

// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     product: productReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// Re-export store dan types
// export { store } from './store';
// export type { RootState, AppDispatch } from './store';

// // Optional: Export hooks untuk penggunaan yang mudah
// export { useAppDispatch, useAppSelector } from './hooks';


// store/index.ts - CONTOH YANG BENAR
import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../store/reducers/authSlice" 
import productReducer from '../store/reducers/product/productSlice'
import productDetailReducer from '../store/reducers/product/productDetailSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    productDetail: productDetailReducer, 
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch