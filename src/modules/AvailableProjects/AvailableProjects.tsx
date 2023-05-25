import React from "react";
import { Wrapper } from "src/components";
import { StoreProjects } from "./store/Store";
import { observer } from "mobx-react-lite";
import { ShowMoreProp } from "src/domains";

export const AvailableProjects = observer(() => {
  const { loading, projects, size, offset, limit } = StoreProjects;

  React.useEffect(() => {
    StoreProjects.getProjects();
  }, [offset]);

  const ShowMore = (selectedItem: ShowMoreProp) => {
    StoreProjects.offset = selectedItem.selected + 1;
  };

  return (
    <Wrapper
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
