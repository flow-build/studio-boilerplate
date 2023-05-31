import Logger from 'utils/logger';

interface Error {
  message: string;
  status: number;
}

function API() {
  let BASE_URL = '';

  return {
    setBaseUrl(baseUrl: string) {
      BASE_URL = baseUrl;
    },
    async get<T>(url: string, options?: RequestInit): Promise<T | Error> {
      try {
        const response = await fetch(`${BASE_URL}${url}`, options);
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
    async post<T>(url: string, options?: RequestInit): Promise<T | Error> {
      try {
        const response = await fetch(`${BASE_URL}${url}`, {
          method: 'POST',
          ...options
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
