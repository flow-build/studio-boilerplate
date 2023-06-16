import axios from 'axios';
import { store } from 'store';
import { setIsLoading } from 'store/slices/loading';

const initialHeader = {
  'Content-Type': 'application/json'
} as const;

const api = axios.create({
  baseURL: '',
  headers: initialHeader
});

api.interceptors.request.use(
  (config) => {
    store.dispatch(setIsLoading(true));
    return config;
  },
  (error) => {
    store.dispatch(setIsLoading(false));
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    store.dispatch(setIsLoading(false));
    return response;
  },
  (error) => {
    store.dispatch(setIsLoading(false));

    return Promise.reject({
      ...error,
      message: error?.response?.data?.message ?? error?.message
    });
  }
);

function API() {
  return {
    ...api,
    post: api.post,
    get: api.get,
    put: api.put,
    patch: api.patch,
    delete: api.delete,
    setHeader(header: { [key: string]: string }) {
      api.defaults.headers.common = { ...initialHeader, ...header };
    },
    setBaseUrl(baseUrl: string) {
      api.defaults.baseURL = baseUrl;
    }
  };
}

export default API();
