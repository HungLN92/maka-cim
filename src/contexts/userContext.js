import React from "react";
import { createContext } from "react";
import { useLocalStore } from "mobx-react";
import { createUserStore } from "../stores/userStore";

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const store = useLocalStore(createUserStore);

  return <UserContext.Provider value={store}>{children}</UserContext.Provider>;
};

export default UserProvider;
