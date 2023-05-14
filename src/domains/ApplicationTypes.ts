export type Name = string;

export type Option = any | OptionsFH;

export type id = string;

export type Modules = (Module | undefined)[] | undefined;

export type Module = {
  name: Name;
  namePrivate: string;
  options?: Option;
  id: id;
  keyWord?: string;
};

export interface ScreenMas {
  name: Name;
  namePrivate: string;
  id: id;
  modules?: SubModules[];
  options?: Option;
  keyWord?: string;
  uncommonHeader?: FHObject;
  uncommonFooter?: FHObject;
}

export interface SubModules {
  name: Name;
  namePrivate: string;
  id: id;
  modules?: Modules;
  options?: Option;
  keyWord?: string;
}

// interface ApplicationT {
//   footer?: ScreenMas;
//   header?: ScreenMas;
//   screens?: ScreenMas[];
// }

export enum typeFH {
  "Header",
  "Footer",
}

export type OptionsFH = {
  backgroundColor?: string;
  height?: string;
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

export type ScreenAddElemeny = Module & {
  parent?: string;
  originalIndex?: number;
};

export type FHObject = Partial<{
  name: Name;
  namePrivate: string;
  id: id;
  modules?: Modules;
  options?: Option;
  keyWord?: string;
}>;
