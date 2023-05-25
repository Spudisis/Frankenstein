import {
  ItemType,
  PropsDNDHook,
} from "src/components/CustomDragNDrop/CustomDNDHook";
import { DeleteFuncType, Module, ParentParent, SubModules } from "src/domains";
import { FindIndexFunc } from "../FindIndexDecompose";

export type DragHook = {
  elem: Module | SubModules;
  FindIndex: FindIndexFunc;
  typeDrag: ItemType | ItemType[];
  MoveCardFunc: any;
  deleteItemFunc: DeleteFuncType;
} & Partial<Pick<PropsDNDHook, "parent">> &
  Pick<ParentParent, "ParentParent">;
