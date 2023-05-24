import { PropsDNDHook } from "src/components/CustomDragNDrop/CustomDNDHook";
import { DeleteFuncType, Module, ParentParent, SubModules } from "src/domains";

export type DragHook = {
  elem: Module | SubModules;
  FindIndex: any;
  typeDrag: any;
  MoveCardFunc: any;
  deleteItemFunc: DeleteFuncType;
} & Partial<Pick<PropsDNDHook, "parent">> &
  Pick<ParentParent, "ParentParent">;
