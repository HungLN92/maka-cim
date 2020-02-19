import customRequest, { getPrivateHeaders } from "../utils/request";
import { API } from "../constants";

export const createOfferService = () => {
  return {
    get: async urlParams => {
      const headers = getPrivateHeaders();
      const options = {
        method: "GET",
        headers
      };
      const request = new Request(
        `${API.GET_OFFERS}${urlParams.toString() ? `?${urlParams}` : ""}`,
        options
      );
      const response = await customRequest(request);
      return response;
    },
    getById: async urlParams => {
      const headers = getPrivateHeaders();
      const options = {
        method: "GET",
        headers
      };
      const request = new Request(
        `${API.GET_OFFER_BY_ID}${urlParams.toString() ? `?${urlParams}` : ""}`,
        options
      );
      const response = await customRequest(request);
      return response;
    }
  };
};
