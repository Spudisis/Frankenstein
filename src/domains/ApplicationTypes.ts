import { TypesStyles } from "./OptionsItemJson";

export type Name = string;

export type Option = Partial<TypesStyles>;

export type id = string;

export type Modules = (Module | undefined)[] | undefined;

export type Module = {
  name: Name;
  namePrivate: string;
  options: Option;
  id: id;
  keyWord?: string;
};

export interface ScreenMas {
  name: Name;
  namePrivate: string;
  id: id;
  modules?: SubModules[];
  options: Option;
  keyWord?: string;
  uncommonHeader?: FHObject;
  uncommonFooter?: FHObject;
}

export interface SubModules {
  name: Name;
  namePrivate: string;
  id: id;
  modules?: Modules;
  options: Option;
  keyWord?: string;
  scrollable?: string;
}

export enum typeFH {
  "Header",
  "Footer",
}

export type OptionsFH = {
  backgroundColor?: string;
  height?: string;
  display?: string;
};

export enum SectionEnum {
  "pictures",
  "options",
}

export type ParentElem = {
  parent?: string | typeFH;
};

export type ParentParent = {
  ParentParent?: string;
};

export type ScreenAddElemeny = Module &
  SubModules & {
    parent?: string;
    originalIndex?: number;
    deleteItemFunc?: DeleteFuncType;
  };

export type FHObject = Partial<{
  name: Name;
  namePrivate: string;
  id: id;
  modules?: Modules;
  options?: Option;
  keyWord?: string;
}>;

export type DeleteFuncType = ({ id }: { id: string }) => void;
