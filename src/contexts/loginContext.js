import React from "react";
import { createContext } from "react";
import { useLocalStore } from "mobx-react";
import { createLoginStore } from "../stores/loginStore";

export const LoginContext = createContext(null);

const LoginProvider = ({ children }) => {
  const store = useLocalStore(createLoginStore);

  return (
    <LoginContext.Provider value={store}>{children}</LoginContext.Provider>
  );
};

export default LoginProvider;
