import App from "../store/Application";
import {
  Module,
  ParentElem,
  ParentParent,
  SectionEnum,
  SubModules,
} from "../domains/ApplicationTypes";
import { ChangeOptions } from "src/domains";
export const changeTarget = (obj: SubModules, { changeOptions }: ChangeOptions) => {
  App.setTarget(obj, { changeOptions });
  App.section !== SectionEnum.options && App.changeSection(SectionEnum.options);
};
