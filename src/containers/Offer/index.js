import React from "react";
import { OfferPageStyler } from "./style";
import { useOfferData } from "../../hooks/offerHook";
import { useObserver } from "mobx-react";
import BrowseList from "./components/BrowseList";
import Details from "./components/Details";

const OfferPage = () => {
  const { offerId } = useOfferData(store => ({
    offerId: store.offerId
  }));

  return useObserver(() => (
    <OfferPageStyler>{offerId ? <Details /> : <BrowseList />}</OfferPageStyler>
  ));
};

export default OfferPage;
