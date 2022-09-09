import { api } from "../api/api";
import { TRequestBody, TResponse } from "./types";

const startProcess = async (workflowName: string, body: TRequestBody): Promise<TResponse> => {
  const { data } = await api
    .post<TResponse>(`workflows/name/${workflowName}/start`, body || {})
    .then(response => response)
    .catch(e => {
      console.error(e);
      throw new Error(`startProcess -> ${e.error}: ${e.message}`);
    });
  return data;
};

export { startProcess };
