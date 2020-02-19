import { decorate, observable, action, runInAction } from "mobx";
import { ENUM, ROUTE } from "../constants";
import { createLoginService } from "../services/loginService";
import {
  setAccessToken,
  setRefreshToken,
  removeAccessToken,
  removeRefreshToken
} from "../utils/storage";
import { history } from "../utils/history";

export const createLoginStore = () => {
  const loginServ = createLoginService();

  const store = {
    errors: {},
    inputs: {},
    stage: ENUM.LOGIN_FORM_STAGE.LOGIN,
    updateErrors(errors) {
      store.errors = errors;
    },
    updateInput(name, value) {
      store.inputs = {
        ...store.inputs,
        [name]: value
      };
    },
    updateStage(stage) {
      store.stage = stage;
    },
    resetStore() {
      store.errors = {};
      store.inputs = {};
    },
    async callLogin() {
      const email = store.inputs.email;
      const resData = await loginServ.login({ username: email });
      if (resData.errors) {
        runInAction(() => {
          store.errors = {
            email: resData.errors.username
          };
        });
      } else if (resData.data) {
        store.inputs.id = resData.data.id;
        if (resData.next === "otp") {
          runInAction(() => {
            store.stage = ENUM.LOGIN_FORM_STAGE.OTP;
          });
        }
      }
    },
    async callVerifyOTP() {
      const model = {
        id: store.inputs.id,
        username: store.inputs.email,
        otp: store.inputs.otp.replace(/ /g, "")
      };
      const resData = await loginServ.verifyOTP(model);
      runInAction(() => {
        if (resData.errors) {
          store.errors.otp = resData.errors.otp;
        } else {
          setAccessToken(resData.data.accessToken);
          setRefreshToken(resData.data.refreshToken);
          history.push(ROUTE.OFFER);
        }
      });
    },
    async callLogout() {
      const resData = await loginServ.logout();
      if (resData.done) {
        removeAccessToken();
        removeRefreshToken();
        history.push(ROUTE.LOGIN);
      }
    }
  };

  decorate(store, {
    errors: observable,
    inputs: observable,
    stage: observable,
    updateErrors: action,
    updateInput: action,
    updateStage: action,
    resetStore: action
  });

  return store;
};
