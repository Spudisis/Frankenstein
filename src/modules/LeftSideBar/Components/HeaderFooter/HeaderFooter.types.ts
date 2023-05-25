import {
  ChangeOptions,
  FHObject,
  Module,
  ParentElem,
  typeFH,
} from "src/domains";

export type Props = {
  data: FHObject;
  handleChangeTarget: (obj: Module, changeOptions: ChangeOptions) => void;
  target: Module & ParentElem;
  parent: typeFH;
  screenId?: string;
  nesting?: number;
};
