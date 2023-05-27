import {
  ChangeTargetType,
  FHObject,
  Module,
  ParentElem,
  typeFH,
} from "src/domains";

export type Props = {
  data: FHObject;
  handleChangeTarget: ({ obj, changeOptions }: ChangeTargetType) => void;
  target: Module & ParentElem;
  parent: typeFH;
  screenId?: string;
  nesting?: number;
};
