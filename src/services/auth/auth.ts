import { TOKEN_KEY } from "../../cofig/constants";
import { api } from "../api/api";

const getLocalToken = (): string | null => localStorage.getItem(TOKEN_KEY);

const storeLocalToken = (token: string): void => localStorage.setItem(TOKEN_KEY, token);

const clearLocalToken = (): void => localStorage.removeItem(TOKEN_KEY);

const getRemoteToken = async (): Promise<void> => {
  try {
    const response = await api.post("/token", {});
    console.log("getRemoteToken", response.data.jwtToken || response.data.token);
    return response.data.jwtToken || response.data.token;
  } catch (e: any) {
    throw new Error(`getRemoteToken -> ${e.error}: ${e.message}`);
  }
};

export { getRemoteToken, getLocalToken, storeLocalToken, clearLocalToken };
