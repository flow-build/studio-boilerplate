/* eslint-disable @typescript-eslint/no-explicit-any */
import Logger from 'utils/logger';

import { BaseResponse } from './types';

function API() {
  let BASE_URL = '';
  let HEADER: HeadersInit = {
    'Content-Type': 'application/json'
  };

  return {
    setBaseUrl(baseUrl: string) {
      BASE_URL = baseUrl;
    },
    setHeader(header: HeadersInit) {
      HEADER = { ...HEADER, ...header };
    },
    async get<T>(url: string, options?: RequestInit): Promise<BaseResponse<T>> {
      try {
        const response = await fetch(`${BASE_URL}${url}`, {
          ...options,
          headers: {
            ...options?.headers,
            ...HEADER
          }
        });
        const result = (await response.json()) as T;

        return {
          status: 100,
          ok: true,
          data: result
        };
      } catch (error) {
        Logger.error({ error });
        return {
          message: 'Error message',
          status: 400,
          ok: false
        };
      }
    },
    async post<T>(url: string, data?: any, options?: RequestInit): Promise<BaseResponse<T>> {
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

        const result = (await response.json()) as T;

        return {
          status: 200,
          ok: true,
          data: result
        };
      } catch (error: any) {
        Logger.error({ error });
        return {
          message: error?.message,
          ok: false,
          status: 400
        };
      }
    }
  };
}

export default API();
