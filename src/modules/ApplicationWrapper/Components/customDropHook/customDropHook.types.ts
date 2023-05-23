import { ScreenAddElemeny } from "src/domains";

export type DropHook = {
  dropFunc?: (item: ScreenAddElemeny) => void;
  MoveCardFunc: any;
  elem: ScreenAddElemeny;
  FindIndex: any;
  ItemAccess?: any;
};
