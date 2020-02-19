import React from "react";
import { createContext } from "react";
import { useLocalStore } from "mobx-react";
import { createOfferStore } from "../stores/offerStore";

export const OfferContext = createContext(null);

const OfferProvider = ({ children }) => {
  const store = useLocalStore(createOfferStore);

  return (
    <OfferContext.Provider value={store}>{children}</OfferContext.Provider>
  );
};

export default OfferProvider;
