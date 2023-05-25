import { Module, Modules, SubModules } from "src/domains";

export type CustomDropHF = {
  newModuleDrop: (newModules: Module | SubModules) => void;
};
