import { LoginContext } from "../contexts/loginContext";
import { useContext } from "react";
import { useObserver } from "mobx-react";

export const useLoginData = dataSelector => {
  const value = useContext(LoginContext);

  if (!value) {
    throw new Error("Cannot get login context!");
  }

  const store = value;

  return useObserver(() => dataSelector(store));
};
