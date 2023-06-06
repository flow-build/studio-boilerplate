/* eslint-disable @typescript-eslint/no-explicit-any */
import Logger from 'utils/logger';

import { BaseResponse } from './types';

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
    async get<T>(url: string, options?: RequestInit): Promise<BaseResponse<T>> {
      try {
        const response = await fetch(`${BASE_URL}${url}`, {
          ...options,
          headers: {
            ...options?.headers,
            ...HEADER
          }
        });
        const result = (await response.json()) as BaseResponse<T>;

        return {
          status: result.status,
          ok: result.ok,
          data: result.data
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
            'Content-Type': 'application/json',
            ...options?.headers,
            ...HEADER
          }
        });
        const result = (await response.json()) as BaseResponse<T>;

        return {
          status: result.status,
          ok: result.ok,
          data: result.data
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
