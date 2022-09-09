import { AxiosInstance } from "axios";

const getRemoteJwtToken = async (apiService: AxiosInstance) => {
  try {
    const response = await apiService.post("/token", {});
    return response.data.jwtToken || response.data.token;
  } catch (e: any) {
    throw new Error(`getRemoteToken -> ${e.error}: ${e.message}`);
  }
};

export { getRemoteJwtToken };
