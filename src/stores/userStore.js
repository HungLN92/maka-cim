import { createUserService } from "../services/userService";
import { runInAction, decorate, observable, action } from "mobx";

export const createUserStore = () => {
  const userServ = createUserService();

  const store = {
    users: [],
    userDetails: {},
    setUsers(users) {
      store.users = users;
    },
    resetStore() {
      store.users = [];
    },
    async callGetUsers() {
      // const resData = await userServ.get();
      // runInAction(() => {
      //   if (resData.data) {
      //     store.users = resData.data.map(user => ({
      //       ...user
      //     }));
      //   }
      // });
      store.users = [
        {
          username: "hungle@tomochain.com",
          createdTime: 1579054891000
        },
        {
          username: "hung20101643@gmail.com",
          createdTime: 1579054901000
        }
      ];
    },
    async callGetUserDetails() {
      const resData = await userServ.getDetails();
      runInAction(() => {
        if (resData.data) {
          const raw = resData.data;
          store.userDetails = {
            username: raw.userName,
            createdTime: raw.createdAt
          };
        }
      });
    }
  };

  decorate(store, {
    users: observable,
    userDetails: observable,
    setUsers: action,
    resetStore: action,
    callGetUsers: action,
    callGetUserDetails: action
  });

  return store;
};
