import React, { useEffect, useState, useRef } from "react";
import _orderBy from "lodash.orderby";
import {
  DetailsList,
  Fabric,
  DetailsListLayoutMode,
  SelectionMode,
  CommandBar
} from "office-ui-fabric-react";
import { HeaderText, ColorText } from "../../styles/common";
import { primaryColor } from "../../styles/variables";
import { OfferPageStyler } from "./style";
import { useOfferData } from "../../hooks/offerHook";
import { useGlobalData } from "../../hooks/globalHook";
import { TABLE_CONFIG, LIST, ENUM } from "../../constants";

const OfferPage = () => {
  const {
    offers,
    searchInputs,
    setOffers,
    updateSearchInputs,
    callGetOffers
  } = useOfferData(store => ({
    offers: store.offers,
    searchInputs: store.searchInputs,
    setOffers: store.setOffers,
    updateSearchInputs: store.updateSearchInputs,
    callGetOffers: store.callGetOffers
  }));
  const setLoading = useGlobalData(store => store.setLoading);
  const columnsRef = useRef();

  const handleUpdateStatusFilter = newStatus => {
    if (!searchInputs.status || searchInputs.status !== newStatus) {
      updateSearchInputs({ status: newStatus });
    }
  };

  const handleColumnSort = (_, column) => {
    const newColumns = columnsRef.current.map(item => {
      const newItem = item;
      if (item.key === column.key) {
        newItem.isSortedDescending = !newItem.isSortedDescending;
        newItem.isSorted = true;
      } else {
        newItem.isSorted = false;
        newItem.isSortedDescending = true;
      }

      return newItem;
    });
    console.warn("newColumns", newColumns, offers);

    columnsRef.current = newColumns;
    setOffers(offers);
  };

  useEffect(() => {
    columnsRef.current = TABLE_CONFIG.OFFER.map(column => ({
      ...column,
      onColumnClick: handleColumnSort
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.warn("columns", columnsRef.current);

  useEffect(() => {
    try {
      setLoading(true);
      callGetOffers();
      setLoading(false);
    } catch {
      setLoading(false);
    }
  }, [setLoading, callGetOffers, searchInputs]);

  return (
    <OfferPageStyler>
      <HeaderText bold className="mb-4" colorHex={primaryColor}>
        Danh Sách Đơn Hàng
      </HeaderText>
      <Fabric>
        <CommandBar
          items={LIST.OFFER_STATUS_FILTERS.filter(opt =>
            [
              ENUM.OFFER_STATUS.ALL,
              ENUM.OFFER_STATUS.OPEN,
              ENUM.OFFER_STATUS.WHOLE_MATCHING,
              ENUM.OFFER_STATUS.CANCELED
            ].includes(opt.value)
          ).map(opt => ({
            key: `offer_status_${opt.value}`,
            text: (
              <ColorText
                colorHex={ENUM.OFFER_STATUS_COLOR[opt.value]}
                size="sm"
              >
                {opt.label}
              </ColorText>
            ),
            onClick: () => handleUpdateStatusFilter(opt.value)
          }))}
          className="status-filter-bar"
        />
        <DetailsList
          items={offers}
          columns={columnsRef.current}
          selectionMode={SelectionMode.none}
          layoutMode={DetailsListLayoutMode.justified}
          isHeaderVisible={true}
        />
      </Fabric>
    </OfferPageStyler>
  );
};

export default OfferPage;
