import axios from "axios";
import { clearLocalToken } from "../auth/auth";

const api = axios.create({ baseURL: import.meta.env.VITE_BASE_URL });

api.interceptors.request.use(
  async config => {
    const token = "";

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    console.error(`Interceptors Request -> ${error.name}: ${error.message}`);
  },
);

const interceptorResponseError = async (error: any) => {
  if (window.location.pathname !== "/login" && window.location.pathname !== "/" && error.response.status === 401) {
    clearLocalToken();
    window.location.href = "/login";
  }
  return Promise.reject(error);
};

api.interceptors.response.use(response => response, interceptorResponseError);

export { api };
