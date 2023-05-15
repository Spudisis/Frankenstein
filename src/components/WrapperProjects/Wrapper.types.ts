import { MiniatureProjects } from "src/domains";
import { STATUS_LOADING } from "src/domains";

export type WrapperTypes = {
  projects: MiniatureProjects[];
  size: number;
  loading: STATUS_LOADING;
  nameSection: string;
  offset: number;
  limit: number;

  ShowMore: (e: any) => void;
  path?: string;
};
