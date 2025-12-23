import { apiPost } from "../../lib/apiClient";

export const verifyLoginCredential = async (params) => {
  return await apiPost("/Login/Authenticate", params);
};
