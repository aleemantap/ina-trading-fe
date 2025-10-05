// src/features/auth/authSlice.ts

import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
// import axios from "axios";
import { apiPublic } from "@/services/api";
import { AxiosError } from "axios";

// import AsyncStorage from "@react-native-async-storage/async-storage";

interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async (
    { email, password }: { email: string; password: string },
    thunkAPI
  ) => {
    try {
      const response = await apiPublic.post("/seller/login", { email, password });
      // console.log("response-", response.data)
      return response.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Login failed, please try again"
      );
    }
  }
);

// ✅ Thunk untuk register
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (
    data: { name: string; email: string; mobile: string, password: string },
    { rejectWithValue }
  ) => {
    try {
      const res = await apiPublic.post("/seller/register", data);
      return res.data; // { user, token }
    } catch (err) {
      const error = err as AxiosError<{ responseDesc?: string }>; // ✅ perbaikan utama
      return rejectWithValue(
        error.response?.data?.responseDesc || "Register failed"
      );
    }
  }
);


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
    setCredentials: (
      state,
      action: PayloadAction<{ user: User; token: string }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
  extraReducers: (builder) => {
    // login
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.token = action.payload.data.session;
      localStorage.setItem("token", action.payload.token.token);
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // register
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
     
      state.loading = false;
      state.user = action.payload;
      // state.user = action.payload.user;
      // state.token = action.payload.token;
      // localStorage.setItem("token", action.payload.token);
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export const { logout, setCredentials } = authSlice.actions;
export default authSlice.reducer;
