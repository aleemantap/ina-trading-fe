// api.ts

// src/services/api/index.ts
import axios from "axios";
import { RootState, store } from "../../store";
import { logout } from "../../store/reducers/authSlice";

// Gunakan proxy path untuk development
const getBaseURL = () => {
  // Jika di development, gunakan proxy melalui Next.js API route
  // if (process.env.NODE_ENV === 'development') {
  //   return '/api/backend'; // Path ke proxy Anda
  // }
  // Jika production, gunakan direct URL
  return process.env.NEXT_PUBLIC_IP_ADDRESS + "/api/v1.0";
  //return "http://34.87.25.74:8080/api/v1.0";
};

const baseURL = getBaseURL();
console.log();
export const apiPublic = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const apiPrivate = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    // Authorization: `Basic ${btoa(`${username}:${password}`)}`,
    "Reference-Number": "REF20230708100000001",
    "Channel-Id": "WEB",
    //Origin: "local", //"http://localhost:3000",
    //"Request-Time": "2023-07-08 10:00:00",
    "Request-Time": new Date().toISOString()
  },
});



// ====== REQUEST INTERCEPTOR ======
apiPrivate.interceptors.request.use(
  (config) => {
    const state = store.getState() as RootState;
    const token = state.auth.token;
 
    // hanya tambahkan token jika tersedia
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ====== RESPONSE INTERCEPTOR ======
apiPrivate.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Hapus token dari store dan localStorage
      store.dispatch(logout());

      // Redirect ke /login jika di browser
      if (typeof window !== "undefined") {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

/*
apiPrivate.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem("refreshToken");
      if (refreshToken) {
        const res = await apiPublic.post("/auth/refresh", { refreshToken });
        localStorage.setItem("accessToken", res.data.accessToken);
        originalRequest.headers.Authorization = `Bearer ${res.data.accessToken}`;
        return apiPrivate(originalRequest);
      }
    }
    return Promise.reject(error);
  }
);

*/