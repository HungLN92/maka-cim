import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoadingStyler } from "./style";
import { useGlobalData } from "../../hooks/globalHook";

const Loading = () => {
  const loading = useGlobalData(store => store.loading);

  return (
    <LoadingStyler loading={loading}>
      <FontAwesomeIcon className="spinner" icon="spinner" />
    </LoadingStyler>
  );
};

export default Loading;
