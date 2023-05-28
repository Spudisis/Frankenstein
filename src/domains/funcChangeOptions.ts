import { Option, SubModules } from "./ApplicationTypes";

export type ChangeOptions = ({
  options,
  name,
  scrollable,
}: ChangeOptionsProp) => void;

export type ChangeOptionsProp = {
  options: Option;
  name: string;
  scrollable?: string;
};

export type ChangeTargetType = {
  obj: SubModules;
  changeOptions: ChangeOptions;
};
