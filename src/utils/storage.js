export const getStorage = name =>
  localStorage.getItem(name) ? JSON.parse(localStorage.getItem(name)) : null;
export const setStorage = (name, value) =>
  localStorage.setItem(name, JSON.stringify(value));
export const removeStorage = name => localStorage.removeItem(name);

export const getAccessToken = () => getStorage("accessToken");
export const setAccessToken = token => setStorage("accessToken", token);
export const removeAccessToken = () => removeStorage("accessToken");

export const getRefreshToken = () => getStorage("refreshToken");
export const setRefreshToken = token => setStorage("refreshToken", token);
export const removeRefreshToken = () => removeStorage("refreshToken");
