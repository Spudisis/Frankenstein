import { makeAutoObservable } from "mobx";

class Store {
  constructor() {
    makeAutoObservable(this, {});
  }
}

export const StoreProjectsUser = new Store();
