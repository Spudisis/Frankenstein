import React from "react";

import { StoreProjectsUser } from "./store/store";
import { Wrapper } from "src/components/WrapperProjects";

export const ProjectsUser = () => {
  const id = 1;
  const { projects, loading, size } = StoreProjectsUser;
  React.useEffect(() => {
    StoreProjectsUser.initialProjects(id);
  }, []);
  return (
    <div>
      <Wrapper
        nameSection={"Мои проекты"}
        projects={projects}
        loading={loading}
        size={size}
        sizeMin={4}
      />
    </div>
  );
};
