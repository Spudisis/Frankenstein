import React from "react";
import { Wrapper } from "src/components";
import { StoreProjects } from "./store/Store";
import { observer } from "mobx-react-lite";
import { STATUS_LOADING } from "src/domains";

export const AvailableProjects = observer(() => {
  const { loading, projects, size, offset, limit } = StoreProjects;

  React.useEffect(() => {
    StoreProjects.getProjects();
  }, [offset]);
  const CreateProject = () => {
    StoreProjects.createNewProject();
  };

  const ShowMore = (event: any) => {
    StoreProjects.offset = event.selected + 1;
  };

  return (
    <Wrapper
      createNewProject={CreateProject}
      loading={loading}
      projects={projects}
      size={size}
      ShowMore={ShowMore}
      offset={offset}
      limit={limit}
      nameSection="Проекты пользователей"
    />
  );
});
