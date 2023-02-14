import { makeAutoObservable } from "mobx";
import { SectionEnum } from "./Application";

class SelectButton {
  constructor() {
    makeAutoObservable(this, {}, { deep: true });
  }
}

export default new SelectButton();
