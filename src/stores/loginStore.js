import { decorate, observable, action } from "mobx";

export const createLoginStore = () => {
  const store = {
    errors: {},
    inputs: {},
    updateErrors(errors) {
      store.errors = errors;
    },
    updateInput(name, value) {
      store.inputs = {
        ...store.inputs,
        [name]: value
      };
    },
    resetStore() {
      store.errors = {};
      store.inputs = {};
    }
  };

  decorate(store, {
    errors: observable,
    inputs: observable,
    updateErrors: action,
    updateInput: action,
    resetStore: action
  });

  return store;
};
