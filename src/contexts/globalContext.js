import React from "react";
import { createContext } from "react";
import { useLocalStore } from "mobx-react";
import { createGlobalStore } from "../stores/globalStore";

export const GlobalContext = createContext(null);

const GlobalProvider = ({ children }) => {
  const store = useLocalStore(createGlobalStore);

  return (
    <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
  );
};

export default GlobalProvider;
