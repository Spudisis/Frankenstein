import React from "react";
import { Wrapper } from "src/components";
import { StoreProjects } from "./store/Store";
import { observer } from "mobx-react-lite";

export const AvailableProjects = observer(() => {
  const { loading, projects, size } = StoreProjects;
  React.useEffect(() => {
    StoreProjects.getProjects();
  }, []);
  return (
    <div>
      <Wrapper
        loading={loading}
        projects={projects}
        size={size}
        sizeMin={10}
        nameSection="Проекты пользователей"
      />
    </div>
  );
});
