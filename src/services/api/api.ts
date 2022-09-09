import axios from "axios";
import { clearLocalJwtToken, expiredJwtToken, getLocalJwtToken, storeLocalJwtToken } from "../auth/auth";
import { getRemoteJwtToken } from "../resources/token";

const api = axios.create({ baseURL: import.meta.env.VITE_BASE_URL });

api.interceptors.request.use(
  async config => {
    const token = getLocalJwtToken();

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
    clearLocalJwtToken();
    window.location.href = "/login";
  }

  let token: any = getLocalJwtToken();

  if (token && expiredJwtToken(token)) {
    token = await getRemoteJwtToken(api);
    storeLocalJwtToken(token);

    error.config.headers.Authorization = `Bearer ${token}`;
    return api.request(error.config);
  }

  return Promise.reject(error);
};

api.interceptors.response.use(response => response, interceptorResponseError);

export { api };
