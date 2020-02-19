import _get from "lodash.get";

const DOMAINS = {
  // CORE: "http://139.180.212.67:8081",
  // AUTH: "http://139.180.212.67:8080",
  dev: "https://dev.maka.co",
  stg: "https://staging.maka.co",
  prod: "https://staging.maka.co"
};

const baseUrl = _get(DOMAINS, [process.env.REACT_APP_STAGE], DOMAINS.dev);

export default {
  LOGIN: `${baseUrl}/api/v1/auth/login`,
  VERIFY_OTP: `${baseUrl}/api/v1/auth/login-verify`,
  LOGOUT: `${baseUrl}/api/v1/auth/logout`,
  GET_ACCESS_TOKEN: `${baseUrl}/api/v1/login/token`,
  REFRESH_TOKEN: `${baseUrl}/api/v1/auth/refresh-token`,
  GET_OFFERS: `${baseUrl}/api/v1/offer/search`,
  GET_OFFER_BY_ID: `${baseUrl}/api/v1/offer/id`
  // CREATE_ORDER: `${baseUrl}/api/v1/order/create`,
  // GET_ORDERS: `${baseUrl}/api/v1/order/search`,
  // GET_ORDER_BY_ID: `${baseUrl}/api/v1/order/id`,
  // GET_ASSETS: `${baseUrl}/api/v1/order/assets`,
  // GET_PAYMENT_TYPES: `${baseUrl}/api/v1/common/paymentTypes`,
  // GET_BANKS: `${baseUrl}/api/v1/common/banks`,
  // CREATE_PAYMENT: `${baseUrl}/api/v1/private/payment`,
  // GET_DEPOSIT_ASSETS: `${baseUrl}/api/v1/deposit/assets`,
  // GET_DEPOSIT_STATUS: `${baseUrl}/api/v1/deposit/status`,
  // GET_COMMON_ASSETS: `${baseUrl}/api/v1/common/assets`,
  // GET_TRANS_HISTORY: `${baseUrl}/api/v1/user/transactions`,
  // GET_BALANCE: `${baseUrl}/api/v1/user/assets`,
  // GET_USD_RATE: `${baseUrl}/api/v1/market/crypto/rates`,
  // GET_VND_RATE: `${baseUrl}/api/v1/market/currency/rates`,
  // CONFIRM_CANCEL: `${baseUrl}/api/v1/offer/cancel`,
  // CONFIRM_DEPOSIT: `${baseUrl}/api/v1/offer/confirm/collateral`,
  // CONFIRM_TRANSFER: `${baseUrl}/api/v1/offer/confirm/fiatsend`,
  // CONFIRM_RECEIVE: `${baseUrl}/api/v1/offer/confirm/received`,
  // GET_USER_INFO: `${baseUrl}/api/v1/user/detail`,
  // GET_USER_PAYMENT_METHODS: `${baseUrl}/api/v1/user/payments`,
  // CONFIRM_ONLINE: `${baseUrl}/api/ping/ping`,
  // CONFIRM_CANCEL_ORDER: `${baseUrl}/api/v1/order/cancel`,
  // WITHDRAW: `${baseUrl}/api/v1/withdraw/create`,
  // DELETE_PAYMENT_METHOD: `${baseUrl}/api/v1/user/payment`
};
