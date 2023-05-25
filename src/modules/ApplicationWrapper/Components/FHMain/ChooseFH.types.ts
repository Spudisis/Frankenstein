import { ConnectDropTarget } from "react-dnd";
import { FHObject, typeFH } from "src/domains";

export type ChooseFHType = {
  elemScreenFh?: null | {} | FHObject;
  screenId: string;
  dropHook: ConnectDropTarget;
  elemFH: FHObject;
  typeFH: typeFH;
};

export type ReturnChosenFHType = {
  elem: FHObject;
  screenId: string;
  dropHook: ConnectDropTarget;
  type: typeFH;
};
