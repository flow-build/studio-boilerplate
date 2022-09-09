import { api } from "../api/api";
import { TRequestBody, TResponse } from "./types";

const submitActivity = async (activityId: string | number, body: TRequestBody): Promise<TResponse> => {
  try {
    const { data } = await api.post<TResponse>(`/activity_manager/${activityId}/submit`, body || {});
    return data;
  } catch (e: any) {
    console.error(e);
    throw new Error(`submitActivity -> ${e.error}: ${e.message}`);
  }
};

export { submitActivity };
