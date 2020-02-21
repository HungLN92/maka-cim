import { runInAction, decorate, observable, action } from "mobx";
import _orderBy from "lodash.orderby";
import { createOfferService } from "../services/offerService";
import { ENUM } from "../constants";

export const createOfferStore = () => {
  const offerServ = createOfferService();

  const store = {
    offers: [],
    searchInputs: {},
    offerId: "",
    chosenOffer: {},
    setOffers(offers) {
      store.offers = offers;
    },
    updateSearchInputs(inputs) {
      store.searchInputs = {
        ...store.searchInputs,
        ...inputs
      };
    },
    setOffer(id) {
      store.offerId = id;
    },
    resetStore() {
      store.offers = [];
      store.searchInputs = {};
      store.offerId = "";
      store.chosenOffer = {};
    },
    async callGetOffers() {
      const searchInputs = store.searchInputs;
      const params = {};
      if (
        searchInputs.status &&
        searchInputs.status !== ENUM.OFFER_STATUS.ALL
      ) {
        params.offerStat = searchInputs.status;
      }
      const urlParams = new URLSearchParams(Object.entries(params));
      const resData = await offerServ.get(urlParams);
      runInAction(() => {
        if (resData.data) {
          store.offers = _orderBy(
            resData.data.map(raw => ({
              id: raw.offerId,
              order: raw.orderId,
              token: raw.token,
              type: raw.offerSide,
              amount: raw.offerQty,
              price: raw.offerPrice,
              maker: raw.acntCustNm,
              taker: raw.orderAcntNm,
              status: raw.offerStatus,
              createdTime: raw.createdAt,
              updatedTime: raw.updatedAt,
              paymentMethods: raw.paymentInforList.map(item => ({
                type: item.paymentTp,
                name: item.paymentName,
                account: item.paymentAcnt,
                owner: item.paymentOwn,
                bank: item.paymentBranch
              }))
            })),
            ["updatedTime"],
            ["desc"]
          );
        }
      });
    },
    async callGetOfferById(offerId) {
      const urlParams = new URLSearchParams(Object.entries({ offerId }));
      const resData = await offerServ.getById(urlParams);
      runInAction(() => {
        const rawData = resData.data;
        if (rawData) {
          store.chosenOffer = {
            id: rawData.offerId,
            order: rawData.orderId,
            token: rawData.token,
            type: rawData.offerSide,
            amount: rawData.offerQty,
            price: rawData.offerPrice,
            maker: rawData.acntCustNm,
            taker: rawData.orderAcntNm,
            status: rawData.offerStatus,
            createdTime: rawData.createdAt,
            updatedTime: rawData.updatedAt,
            collateralTime: rawData.collateralAt,
            fiatTransferTime: rawData.fiatTransferAt,
            expiredTime: rawData.expireAt,
            finishedTime: rawData.finishedAt,
            paymentMethods: rawData.paymentInforList.map(item => ({
              type: item.paymentTp,
              name: item.paymentName,
              account: item.paymentAcnt,
              owner: item.paymentOwn,
              bank: item.paymentBranch
            }))
          };
        }
      });
    }
  };

  decorate(store, {
    offers: observable,
    searchInputs: observable,
    offerId: observable,
    chosenOffer: observable,
    setOffers: action,
    updateSearchInputs: action,
    setOffer: action,
    resetStore: action,
    callGetOffers: action,
    callGetOfferById: action
  });

  return store;
};
