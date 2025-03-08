import { store } from "@/redux/store";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://task-manager-backend-m3tk.onrender.com",
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
