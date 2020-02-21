import React from "react";
import { DetailsStyler } from "./style";
import { useOfferData } from "../../../../hooks/offerHook";

const Details = () => {
  const { offerId } = useOfferData(store => ({
    offerId: store.offerId
  }));

  return <DetailsStyler>{offerId}</DetailsStyler>;
};

export default Details;
