/* eslint-disable @typescript-eslint/no-explicit-any */
import Logger from 'utils/logger';

interface Error {
  message: string;
  status: number;
}

function API() {
  let BASE_URL = '';
  let HEADER: HeadersInit;

  return {
    setBaseUrl(baseUrl: string) {
      BASE_URL = baseUrl;
    },
    setHeader(header: HeadersInit) {
      HEADER = header;
    },
    async get<T>(url: string, options?: RequestInit): Promise<T | Error> {
      try {
        const response = await fetch(`${BASE_URL}${url}`, {
          ...options,
          headers: {
            ...options?.headers,
            ...HEADER
          }
        });
        const result = await response.json();

        return result as T;
      } catch (error) {
        Logger.error({ error });
        return {
          message: 'Error message',
          status: 400
        };
      }
    },
    async post<T>(url: string, data?: any, options?: RequestInit): Promise<T | Error> {
      try {
        const body: string | undefined = data ? JSON.stringify(data) : undefined;
        const response = await fetch(`${BASE_URL}${url}`, {
          method: 'POST',
          ...options,
          body,
          headers: {
            ...options?.headers,
            ...HEADER
          }
        });
        const result = await response.json();

        return result as T;
      } catch (error) {
        Logger.error({ error });
        return {
          message: 'Error message',
          status: 400
        };
      }
    }
  };
}

export default API();
