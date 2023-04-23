import App from "../store/Application";
import { Module, ParentElem, SectionEnum } from "../domains/ApplicationTypes";
export const changeTarget = (obj: Module, parent: ParentElem) => {
  App.setTarget(obj, parent);
  console.log(obj);
  App.section !== SectionEnum.options && App.changeSection(SectionEnum.options);
};
