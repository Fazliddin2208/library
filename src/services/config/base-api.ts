import axios from "axios";
import {BASE_URL} from "./config";

export const baseApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

baseApi.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem("token")!);

    if (token) {
      config.headers["Authorization"] = config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

baseApi.interceptors.response.use(
  (response) => response,
  (error) => {
    // Can add handling 401, 403 etc. errors

    return Promise.reject(error);
  }
);
