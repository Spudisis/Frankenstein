import {
  ChangeOptions,
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
  changeTarget: (obj: Module, changeOptions: ChangeOptions) => void;
  nesting?: number;
  changeModules: (n: any) => any;
};
