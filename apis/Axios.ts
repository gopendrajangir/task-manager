import { store } from "@/redux/store";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://192.168.31.248:3000",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(async (config) => {
  const token = store.getState().auth.user?.token;
  config.headers.Authorization = "Bearer " + token;
  return config;
});

export { axiosInstance };
