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
  userType: string;
  isSellerActive: boolean;
}

interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  data: string | null;
 
}

const initialState: AuthState = {
  user: null,
  token: null,
  loading: false,
  error: null,
  data: null,
 
};

const syncTokenToCookie = (token: string) => {
  // Hanya jalankan di client side
  if (typeof window !== "undefined") {
    document.cookie = `token=${token}; path=/; max-age=${
      60 * 60 * 24
    }; SameSite=Lax`;
  }
};

const clearTokenCookie = () => {
  if (typeof window !== "undefined") {
    document.cookie = "token=; path=/; max-age=0";
  }
};


export const login = createAsyncThunk(
  "auth/login",
  async (
    { username, password }: { username: string; password: string },
    thunkAPI
  ) => {
    try {
      const response = await apiPublic.post(
        "/seller/login",
        {},
        {
          headers: {
            "Content-Type" : "application/json",
            "Authorization": `Basic ${btoa(`${username}:${password}`)}`,
            "Reference-Number": "REF20230708100000001",
            "Channel-Id": "WEB",
            "Origin": "local",//"http://localhost:3000",
            "Request-Time": "2023-07-08 10:00:00",
          },
        }
      );
      //  console.log("response-", response.data)
      return response.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
    
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Login failed, please try again"
      );
    }
  }
);

// Thunk untuk register
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (
    data: { name: string; email: string; mobile: string, password: string },
    { rejectWithValue }
  ) => {
    try {
      const res = await apiPublic.post("/seller/register", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhbGVlbWFudGFwQGdtYWlsLmNvbSIsImlzcyI6ImF1dGgwIiwiZXhwIjoxNzU5OTI0NjkwfQ.kWKr4qRK7LVNEZ0krwYnTvBaND4sk8f9PF68tZ5b-xQ`,
          "Reference-Number": "REF20230708100000001",
          "Channel-Id": "WEB",
          Origin: "local", //"http://localhost:3000",
          "Request-Time": "2023-07-08 10:00:00",
        },
      });
      return res.data; // { user, token }
    } catch (err) {
      const error = err as AxiosError<{ responseDesc?: string }>; // perbaikan utama
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
      clearTokenCookie();
    },
    setCredentials: (
      state,
      action: PayloadAction<{ user: User | null; token: string }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    
      localStorage.setItem("token", action.payload.token);
      syncTokenToCookie(action.payload.token);
    },
    syncToken: (state) => {
      const token = localStorage.getItem("token");
      if (token) {
        state.token = token;
        syncTokenToCookie(token);
      }
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
      //state.user = action.payload.user;
      //state.token = action.payload.token.token;
      //localStorage.setItem("token", action.payload.token.token);
      state.user = action.payload.data;
      state.token = action.payload.data.session;
      localStorage.setItem("token", action.payload.data.session);
      syncTokenToCookie(action.payload.data.session);
     
      //console.log("Login success - Token saved to cookie");
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
      //  console.log(action.payload);
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
      state.data = action.payload.responseDesc;
      // console.log(
      //   "action.payload.responseDesc ",
      //   action.payload.responseDesc
      // );
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export const { logout, setCredentials, syncToken } = authSlice.actions;
export default authSlice.reducer;
