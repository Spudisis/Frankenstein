import { FHObject, Module, ParentElem } from "src/domains";

export type Props = {
  data: FHObject;
  handleChangeTarget: (obj: Module, parent: ParentElem) => void;
  target: Module & ParentElem;
};
