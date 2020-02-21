import customRequest, { getPrivateHeaders } from "../utils/request";
import { API } from "../constants";

export const createUserService = () => {
  return {
    get: async () => {
      const headers = getPrivateHeaders();
      const options = {
        method: "GET",
        headers
      };
      const request = new Request(API.GET_USERS, options);
      const response = await customRequest(request);
      return response;
    },
    getDetails: async () => {
      const headers = getPrivateHeaders();
      const options = {
        method: "GET",
        headers
      };
      const request = new Request(API.GET_USER_DETAILS, options);
      const response = await customRequest(request);
      return response;
    }
  };
};
