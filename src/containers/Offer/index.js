import React, { useEffect } from "react";
import { OfferPageStyler } from "./style";
import { useOfferData } from "../../hooks/offerHook";
import { useObserver } from "mobx-react";
import BrowseList from "./components/BrowseList";
import Details from "./components/Details";
import { history } from "../../utils/history";
import { stringifyQuery } from "../../utils/misc";

const OfferPage = ({ location, queryObj }) => {
  const { offerId, chosenOffer, setOffer, resetStore } = useOfferData(
    store => ({
      offerId: store.offerId,
      chosenOffer: store.chosenOffer,
      setOffer: store.setOffer,
      resetStore: store.resetStore
    })
  );

  useEffect(() => {
    const newQuery = queryObj;

    if (chosenOffer.id) {
      if (newQuery) {
        newQuery.id = chosenOffer.id;
        history.replace({
          ...location,
          search: stringifyQuery(newQuery)
        });
      } else {
        history.replace({
          ...location,
          search: `?id=${chosenOffer.id}`
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chosenOffer.id]);

  useEffect(() => {
    const { id } = queryObj || {};

    if (id) {
      setOffer(id);
    }

    return () => resetStore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return useObserver(() => (
    <OfferPageStyler>{offerId ? <Details /> : <BrowseList />}</OfferPageStyler>
  ));
};

export default OfferPage;
