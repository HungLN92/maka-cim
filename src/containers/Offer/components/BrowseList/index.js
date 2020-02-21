import React, { useRef, useEffect } from "react";
import { BrowseListStyler } from "./style";
import { HeaderText, ColorText } from "../../../../styles/common";
import { primaryColor } from "../../../../styles/variables";
import {
  Fabric,
  CommandBar,
  DetailsList,
  SelectionMode,
  DetailsListLayoutMode
} from "office-ui-fabric-react";
import { LIST, ENUM, TABLE_CONFIG } from "../../../../constants";
import { useGlobalData } from "../../../../hooks/globalHook";
import { useOfferData } from "../../../../hooks/offerHook";

const BrowseList = () => {
  const {
    offers,
    searchInputs,
    setOffers,
    updateSearchInputs,
    callGetOffers,
    setOffer
  } = useOfferData(store => ({
    offers: store.offers,
    searchInputs: store.searchInputs,
    setOffers: store.setOffers,
    updateSearchInputs: store.updateSearchInputs,
    callGetOffers: store.callGetOffers,
    setOffer: store.setOffer
  }));
  const setLoading = useGlobalData(store => store.setLoading);
  const columnsRef = useRef();
  const offersRef = useRef();

  const handleUpdateStatusFilter = newStatus => {
    if (!searchInputs.status || searchInputs.status !== newStatus) {
      updateSearchInputs({ status: newStatus });
    }
  };

  const handleColumnSort = (_, column) => {
    columnsRef.current = columnsRef.current.map(item => {
      return {
        ...item,
        isSorted: item.key === column.key,
        isSortedDescending: !item.isSortedDescending
      };
    });

    setOffers(
      offersRef.current
        .slice()
        .sort((a, b) => ((column.isSortedDescending ? a > b : a < b) ? 1 : -1))
    );
  };

  useEffect(() => {
    // Update offer list reference when offer list in store changed
    offersRef.current = offers;
  }, [offers]);

  useEffect(() => {
    // Modify column configuration with sort action
    columnsRef.current = TABLE_CONFIG.OFFER.map(column => ({
      ...column,
      onColumnClick: handleColumnSort
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Request offer list when there's a filter change
    try {
      setLoading(true);
      callGetOffers();
      setLoading(false);
    } catch {
      setLoading(false);
    }
    // Update column configuration by status filter
    columnsRef.current = (columnsRef.current || []).map(item => ({
      ...item,
      isSorted: false,
      isSortedDescending: false
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInputs]);

  return (
    <BrowseListStyler>
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
          onItemInvoked={item => setOffer(item.id)}
        />
      </Fabric>
    </BrowseListStyler>
  );
};

export default BrowseList;
