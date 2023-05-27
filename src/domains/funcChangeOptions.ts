import { Option, SubModules } from "./ApplicationTypes";

export type ChangeOptions = ({ options, name }: ChangeOptionsProp) => void;

export type ChangeOptionsProp = { options: Option; name: string };

export type ChangeTargetType = {
  obj: SubModules;
  changeOptions: ChangeOptions;
};
