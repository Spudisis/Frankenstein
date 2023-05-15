import { MiniatureProjects } from "./miniatureProjects";

export type UserProjectType = {
  userProjects: {
    count: number;
    rows: MiniatureProjects[];
  };
};
export type CreateProjectResponse = {
  projectUid: string;
};

export type DeleteProject = {
  result: boolean;
};
