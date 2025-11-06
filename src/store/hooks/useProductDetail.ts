"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductDetail,
  clearProductDetail,
} from "../reducers/product/productDetailSlice";
// import { RootState } from "@/store";
// import { RootState } from "";

import type { RootState,  } from "../../store";

export const useProductDetail = (productId: string | undefined) => {
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector(
    (state: RootState) => state.productDetail
  );

  useEffect(() => {
    if (productId) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      dispatch(fetchProductDetail(productId) as any);
    }

    return () => {
      dispatch(clearProductDetail());
    };
  }, [dispatch, productId]);

  return {
    product,
    loading,
    error,
  };
};
