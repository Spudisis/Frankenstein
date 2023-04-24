import React from "react";

import { StoreProjectsUser } from "./store/store";
import { Wrapper } from "src/components/WrapperProjects";
import { observer } from "mobx-react-lite";

export const ProjectsUser = observer(() => {
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
});
