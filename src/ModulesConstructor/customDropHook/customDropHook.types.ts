import { Module, Modules, SubModules } from "src/domains";

export type CustomDropHF = {
  changeModules: (newModules: Modules | SubModules[]) => void;
  modules: (Module | undefined)[];
};
