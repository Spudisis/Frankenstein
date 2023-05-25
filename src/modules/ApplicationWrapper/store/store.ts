import { makeAutoObservable } from "mobx";
import { CreateId } from "src/components";
import { FHObject, typeFH } from "src/domains";
import Application from "src/store/Application";

class StoreTest {
  constructor() {
    makeAutoObservable(this, {});
  }
  test = "";
  openModalChooseHFScreen = false;
  typeFH: null | typeFH = null;
  private item: FHObject | null = null;
  set setItem(value: FHObject | null) {
    this.item = { ...value, id: CreateId() };
  }
  idScreen: string = "";
  setHFtoAll() {
    console.log(this.typeFH, this.item);
    if (this.typeFH !== null && this.item) {
      console.log("ye");
      Application.changeFooterHeader(this.typeFH, this.item);
    }

    this.clear();
  }
  setHFtoThisScreen() {
    if (this.typeFH !== null && this.item && this.idScreen) {
      Application.changeFooterHeaderScreen(
        this.typeFH,
        this.item,
        this.idScreen
      );
    }

    this.clear();
  }
  clear() {
    this.typeFH = null;
    this.item = null;
    this.openModalChooseHFScreen = false;
  }
}
export const TestStore = new StoreTest();
