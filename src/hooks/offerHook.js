import { useContext } from "react";
import { OfferContext } from "../contexts/offerContext";
import { useObserver } from "mobx-react";

export const useOfferData = dataSelector => {
  const store = useContext(OfferContext);

  if (!store) {
    throw new Error("Cannot get offer context!");
  }

  return useObserver(() => dataSelector(store));
};
