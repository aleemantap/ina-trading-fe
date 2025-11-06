// hooks/useTokenSync.ts
"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { syncToken } from "./reducers/authSlice";


export const useTokenSync = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Cek apakah token ada di localStorage
    const token = localStorage.getItem("token");

    if (token) {
      // Dispatch syncToken (hanya sync token, tanpa user)
      dispatch(syncToken());
      console.log("Token synced from localStorage to cookie");
    }
  }, [dispatch]);
};