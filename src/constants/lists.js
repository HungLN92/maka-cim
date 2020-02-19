import { ROUTE, ENUM } from ".";

export default {
  MENU: [
    {
      name: "Option 1",
      iconName: "PageListSolid",
      label: "Đơn Hàng",
      url: ROUTE.OFFER
    },
    {
      name: "Option 2",
      iconName: "AccountBrowser",
      label: "Người Dùng",
      url: ROUTE.USER_MANAGEMENT
    }
  ],
  OFFER_STATUS_FILTERS: [
    {
      label: "Chờ xử lý",
      value: ENUM.OFFER_STATUS.PENDING
    },
    {
      label: "Đang xử lý",
      value: ENUM.OFFER_STATUS.OPEN
    },
    {
      label: "Khớp toàn bộ",
      value: ENUM.OFFER_STATUS.WHOLE_MATCHING
    },
    {
      label: "Đã hủy",
      value: ENUM.OFFER_STATUS.CANCELED
    },
    {
      label: "Đã hết hạn",
      value: ENUM.OFFER_STATUS.EXPIRED
    }
  ]
};
