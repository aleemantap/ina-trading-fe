// api.ts
/*import axios from "axios";
import { RootState, store } from "../../store/store" //"@store/store" //"@store/index";
import { logout } from   "../../store/authSlice" //"@store/slices/authSlice";


const baseURL = process.env.NEXT_PUBLIC_IP_ADDRESS + "/api/v1.0"; //"http://127.0.0.1:8000/api/v1"; //'http://192.168.100.101:8000/api/v1'; //"http://10.0.2.2:8000/api/v1" //'https://stg-jigo.semesta.digital/api/v1'
//const baseURL = process.env.NEXT_PUBLIC_IP_ADDRESS + "/api/v1"; //"http://127.0.0.1:8000/api/v1"; //'http://192.168.100.101:8000/api/v1'; //"http://10.0.2.2:8000/api/v1" //'https://stg-jigo.semesta.digital/api/v1'


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
  },
});

apiPrivate.interceptors.request.use(
  (config) => {
    const state = store.getState() as RootState;
    const token = state.auth.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiPrivate.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      store.dispatch(logout());
    }
    return Promise.reject(error);
  }
);
*/
// src/services/api/index.ts
import axios from "axios";
import { RootState, store } from "../../store/store";
import { logout } from "../../store/authSlice";

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
  },
});

apiPrivate.interceptors.request.use(
  (config) => {
    const state = store.getState() as RootState;
    const token = state.auth.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiPrivate.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      store.dispatch(logout());
    }
    return Promise.reject(error);
  }
);