// ===== IMPORTS =====
// Modules
import _get from "lodash.get";
// Utilities & Constants
import { history } from "./history";
import {
  getRefreshToken,
  removeAccessToken,
  removeRefreshToken,
  setAccessToken,
  setRefreshToken,
  getAccessToken
} from "./storage";
import { API, ROUTE } from "../constants";
// ===================

export const getPrivateHeaders = () => {
  const headers = new Headers();

  headers.append("Authorization", `Bearer ${getAccessToken()}`);
  headers.append("Content-Type", "application/json");

  return headers;
};

export const getPublicHeaders = () => {
  const headers = new Headers();

  headers.append("Content-Type", "application/json");

  return headers;
};

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }

  return response.json ? response.json() : response;
}

/**
 * Check if access token is expired & update access token before requesting
 *
 * @param {Object} response A response from a network request
 * @param {Object} mainRequest URL & request options of previous request
 */
function checkToken(response, mainRequest) {
  const refreshToken = getRefreshToken();

  if (refreshToken && response.status === 403) {
    return fetch(API.REFRESH_TOKEN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        refreshToken
      })
    })
      .then(tokenRes => {
        if (tokenRes.status >= 200 && tokenRes.status < 300) {
          return tokenRes.json();
        } else {
          removeAccessToken();
          removeRefreshToken();
          history.push(ROUTE.LOGIN);
        }
      })
      .then(tokenData => {
        const { accessToken, refreshToken } = _get(tokenData, "data", {});
        const newRequest = mainRequest;
        newRequest.headers.append("Authorization", `Bearer ${accessToken}`);
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);

        return fetch(newRequest).then(parseJSON);
      });
  }

  return response;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default async function customRequest(requestObj) {
  return await fetch(requestObj)
    .then(response => checkToken(response, requestObj))
    .then(parseJSON);
}
