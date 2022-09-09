import { TOKEN_KEY } from "../../cofig/constants";
import jwtDecode from "jwt-decode";

const getLocalJwtToken = (): string | null => localStorage.getItem(TOKEN_KEY);

const storeLocalJwtToken = (token: string | null): void => localStorage.setItem(TOKEN_KEY, token);

const clearLocalJwtToken = (): void => localStorage.removeItem(TOKEN_KEY);

const expiredJwtToken = (token: string) => {
  const { exp } = jwtDecode<{ exp: number }>(token);
  const expireDate = new Date(exp * 1000).getTime();

  return Date.now() > expireDate;
};

export { getLocalJwtToken, storeLocalJwtToken, clearLocalJwtToken, expiredJwtToken };
