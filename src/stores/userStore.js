import { createUserService } from "../services/userService";
import { runInAction, decorate, observable, action } from "mobx";

export const createUserStore = () => {
  const userServ = createUserService();

  const store = {
    users: [],
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
          userName: "hungle@tomochain.com",
          createdTime: 1579054891000
        },
        {
          userName: "hung20101643@gmail.com",
          createdTime: 1579054901000
        }
      ];
    }
  };

  decorate(store, {
    users: observable,
    setUsers: action,
    resetStore: action,
    callGetUsers: action
  });

  return store;
};
