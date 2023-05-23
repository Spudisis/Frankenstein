import { makeAutoObservable } from "mobx";

class TestStore {
  constructor() {
    makeAutoObservable(this, {});
  }
  modules: any = [];
  parent: string = "";
  change(modules: any, item: any, parent: string) {
    this.modules = modules.map((elem: any) => {
      if (elem.id === item.id) {
        return item;
      }
      return elem;
    });
  }
}
