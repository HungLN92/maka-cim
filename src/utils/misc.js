import _get from "lodash.get";
import { isArray } from "util";

export const formatTime = timestamp => {
  const date = new Date(timestamp);

  return `${`0${date.getDate()}`.slice(-2)}/${`0${date.getMonth() + 1}`.slice(
    -2
  )}/${date.getFullYear()} ${`0${date.getHours()}`.slice(
    -2
  )}:${`0${date.getMinutes()}`.slice(-2)}:${`0${date.getSeconds()}`.slice(-2)}`;
};

export const parseQuery = location => {
  const search = _get(location, "search", "").substring(1);

  return search
    ? JSON.parse(
        `{"${search.replace(/&/g, '","').replace(/=/g, '":"')}"}`,
        (key, value) => (key === "" ? value : decodeURIComponent(value))
      )
    : {};
};

export const stringifyQuery = query => {
  return `?${Object.keys(query)
    .map(key => {
      let value = query[key];

      if (isArray(value)) {
        value = JSON.stringify(value);
      }

      return `${key}=${encodeURIComponent(value)}`;
    })
    .join("&")}`;
};
