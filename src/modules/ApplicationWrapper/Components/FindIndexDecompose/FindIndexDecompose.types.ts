import { SubModules, Module } from "src/domains";

export type FindIndexPropComponent = {
  modules: SubModules[] | Module[];
};

export type FindIndexFunc = (id: string) => {
  card: Module;
  index: number;
  id: string;
} | null;
