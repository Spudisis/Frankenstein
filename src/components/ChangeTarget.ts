import App from "../store/Application";
import {
  Module,
  ParentElem,
  ParentParent,
  SectionEnum,
} from "../domains/ApplicationTypes";
export const changeTarget = (
  obj: Module,
  parent: ParentElem,
  ParentParent?: ParentParent
) => {
  
  App.setTarget(obj, parent, ParentParent);
  App.section !== SectionEnum.options && App.changeSection(SectionEnum.options);
};
