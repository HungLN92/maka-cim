import React from "react";
import _get from "lodash.get";
import { ChatboxStyler } from "./style";
import { useOfferData } from "../../hooks/offerHook";

const DOMAIN = {
  dev: "http://localhost:3002",
  stg: "https://staging.maka.co",
  prod: "https://staging.maka.co"
};

const Chatbox = () => {
  const { offerId } = useOfferData(store => ({
    offerId: store.offerId
  }));
  console.warn("offerId", offerId);

  return (
    <ChatboxStyler>
      <iframe
        title="Chat Box"
        src={`${_get(
          DOMAIN,
          [process.env.REACT_APP_STAGE],
          DOMAIN.dev
        )}/chatbox/${offerId}#hide_navbar`}
      />
    </ChatboxStyler>
  );
};

export default Chatbox;
