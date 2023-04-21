import { makeAutoObservable } from "mobx";
import { SectionEnum } from "./types/ApplicationTypes";

class SelectButton {
  constructor() {
    makeAutoObservable(this, {}, { deep: true });
  }
}

export default new SelectButton();
