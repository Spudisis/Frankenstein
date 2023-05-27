import type {
  ChangeTargetType,
  FHObject,
  Module,
  ParentElem,
  ParentParent,
  ScreenMas,
  SubModules,
} from "src/domains";

export type NestingLayout = {
  target: Module & ParentElem & ParentParent;
  subModule: ScreenMas | SubModules | FHObject;
  changeTarget: ({ obj, changeOptions }: ChangeTargetType) => void;
  nesting?: number;
  changeModules: (n: any) => any;
};
