import { makeAutoObservable } from "mobx";

class StoreTest {
  constructor() {
    makeAutoObservable(this, {});
  }
  test = "";
}
export const TestStore = new StoreTest();
