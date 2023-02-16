import App, { Module, SectionEnum } from "../store/Application";

export const changeTarget = (obj: Module) => {
  App.setTarget(obj);
  console.log(obj);
  App.section !== SectionEnum.options && App.changeSection(SectionEnum.options);
};
