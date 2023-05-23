import { PropsDNDHook } from "src/components/CustomDragNDrop/CustomDNDHook";
import { Module, ParentParent, SubModules } from "src/domains";

export type DragHook = {
  elem: Module | SubModules;
  FindIndex: any;
  typeDrag: any;
  MoveCardFunc: any;
} & Partial<Pick<PropsDNDHook, "parent">> &
  Pick<ParentParent, "ParentParent">;
