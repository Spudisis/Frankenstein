import { SubModules, typeFH } from "src/domains";

export type WrapperCustomT = {
  elem: SubModules;
  MoveCardFunc: any;
  FindIndex: any;
  parent: string | typeFH | undefined;
};
