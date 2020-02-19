import {
  primaryColor,
  secondaryColor,
  redColor,
  blackColor,
  yellowColor,
  greenColor
} from "../styles/variables";

export default {
  LOGIN_FORM_STAGE: {
    LOGIN: "login",
    OTP: "otp"
  },
  OFFER_STATUS: {
    ALL: "-1",
    PENDING: "01",
    OPEN: "02",
    CANCELED: "03",
    // PARTIAL_MATCHING: "04",
    WHOLE_MATCHING: "05",
    EXPIRED: "06"
    // FINISHED: "00",
    // ERROR: "09"
  },
  OFFER_STATUS_COLOR: {
    "01": blackColor,
    "02": primaryColor,
    "03": redColor,
    "04": yellowColor,
    "05": greenColor,
    "06": secondaryColor
  }
};
