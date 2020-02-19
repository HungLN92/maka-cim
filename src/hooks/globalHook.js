import { useContext } from "react";
import { GlobalContext } from "../contexts/globalContext";
import { useObserver } from "mobx-react";

export const useGlobalData = dataSelector => {
  const store = useContext(GlobalContext);

  if (!store) {
    throw new Error("Cannot get global context!");
  }

  return useObserver(() => dataSelector(store));
};
