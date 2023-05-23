import App from "../store/Application";
import {
  Module,
  ParentElem,
  ParentParent,
  SectionEnum,
} from "../domains/ApplicationTypes";
import { ChangeOptions } from "src/domains";
export const changeTarget = (
  obj: Module,
  { changeOptions }: ChangeOptions
) => {
  App.setTarget(obj, { changeOptions });
  App.section !== SectionEnum.options && App.changeSection(SectionEnum.options);
};
