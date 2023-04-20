import { makeAutoObservable } from "mobx";

class Auth {
  constructor() {
    makeAutoObservable(this, {}, { deep: true });
  }
  
}

export const AuthStore = new Auth();
