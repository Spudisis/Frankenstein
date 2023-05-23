import { Option } from "./ApplicationTypes";

export type ChangeOptions = {
  changeOptions: ({ options, name }: ChangeOptionsProp) => void;
};

export type ChangeOptionsProp = { options: Option; name: string };
