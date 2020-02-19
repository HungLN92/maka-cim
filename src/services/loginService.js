import { API } from "../constants";
import customRequest, {
  getPublicHeaders,
  getPrivateHeaders
} from "../utils/request";

export const createLoginService = () => {
  return {
    login: async model => {
      const headers = getPublicHeaders();
      const options = {
        method: "POST",
        headers,
        body: JSON.stringify(model)
      };
      const request = new Request(API.LOGIN, options);

      const response = await customRequest(request);
      return response;
    },
    verifyOTP: async model => {
      const headers = getPublicHeaders();
      const options = {
        method: "POST",
        headers,
        body: JSON.stringify(model)
      };
      const request = new Request(API.VERIFY_OTP, options);
      const response = await customRequest(request);
      return response;
    },
    logout: async () => {
      const headers = getPrivateHeaders();
      const options = {
        method: "POST",
        headers
      };
      const request = new Request(API.LOGOUT, options);
      const response = await customRequest(request);
      return response;
    }
  };
};
