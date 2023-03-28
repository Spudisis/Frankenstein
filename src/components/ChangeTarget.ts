import App, { Module, ParentElem, SectionEnum } from "../store/Application";

export const changeTarget = (obj: Module, parent: ParentElem) => {
  App.setTarget(obj, parent);
  console.log(obj);
  App.section !== SectionEnum.options && App.changeSection(SectionEnum.options);
};
