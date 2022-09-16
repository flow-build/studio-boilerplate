import { AxiosInstance } from "axios";

const getRemoteJwtToken = async (apiService: AxiosInstance) => {
  const token = await apiService
    .post("/token", {})
    .then(response => {
      return response.data.jwtToken || response.data.token;
    })
    .catch(e => {
      console.error(e);
      throw new Error(`getRemoteToken -> ${e.error}: ${e.message}`);
    });
  return token;
};

export { getRemoteJwtToken };
