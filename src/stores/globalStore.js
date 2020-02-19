import { decorate, observable, action } from "mobx";

export const createGlobalStore = () => {
  const store = {
    loading: false,
    setLoading(bool) {
      store.loading = bool;
    }
  };

  decorate(store, {
    loading: observable,
    setLoading: action
  });

  return store;
};
