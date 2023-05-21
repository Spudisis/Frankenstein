import {
  FHObject,
  Module,
  Modules,
  ParentElem,
  ParentParent,
  ScreenMas,
  SubModules,
} from "src/domains";

export type NestingLayout = {
  target: Module & ParentElem & ParentParent;
  subModule: ScreenMas | SubModules | FHObject;
  changeTarget: (
    obj: Module,
    parent: ParentElem,
    ParentParent?: ParentParent
  ) => void;
  nesting?: number;
};
