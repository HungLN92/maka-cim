import { LoginContext } from "../contexts/loginContext";
import { useContext } from "react";
import { useObserver } from "mobx-react";

export const useLoginData = dataSelector => {
  const store = useContext(LoginContext);

  if (!store) {
    throw new Error("Cannot get login context!");
  }

  return useObserver(() => dataSelector(store));
};
