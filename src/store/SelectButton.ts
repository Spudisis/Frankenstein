import { makeAutoObservable } from "mobx";
import { SectionEnum } from "../domains/ApplicationTypes";

class SelectButton {
  constructor() {
    makeAutoObservable(this, {}, { deep: true });
  }
}

export default new SelectButton();
