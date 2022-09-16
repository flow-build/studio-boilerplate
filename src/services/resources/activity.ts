import { api } from "../api/api";
import { TRequestBody, TResponse } from "./types";

const submitActivity = async (activityId: string | number, body: TRequestBody): Promise<TResponse> => {
  const { data } = await api
    .post<TResponse>(`/activity_manager/${activityId}/submit`, body || {})
    .then(response => response)
    .catch(e => {
      console.error(e);
      throw new Error(`submitActivity -> ${e.error}: ${e.message}`);
    });
  return data;
};

export { submitActivity };
