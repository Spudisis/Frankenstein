
import { DeleteFuncType, Module, ParentParent, SubModules } from "src/domains";
import { FindIndexFunc } from "../FindIndexDecompose";
import { ItemType } from "src/domains/ItemTypesDNDType";
import { PropsDNDHook } from "src/components/CustomDragNDrop/CustomDNDHook.types";

export type DragHook = {
  elem: Module | SubModules;
  FindIndex: FindIndexFunc;
  typeDrag: ItemType | ItemType[];
  MoveCardFunc: any;
  deleteItemFunc: DeleteFuncType;
} & Partial<Pick<PropsDNDHook, "parent">> &
  Pick<ParentParent, "ParentParent">;
