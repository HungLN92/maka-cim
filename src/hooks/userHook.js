import { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import { useObserver } from "mobx-react";

export const useUserData = dataSelector => {
  const store = useContext(UserContext);

  if (!store) {
    throw new Error("Cannot get user context!");
  }

  return useObserver(() => dataSelector(store));
};
