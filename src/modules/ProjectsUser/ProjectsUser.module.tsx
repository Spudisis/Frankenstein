import React from "react";

import { StoreProjectsUser } from "./store/store";
import { Wrapper } from "src/components/WrapperProjects";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { AuthStore } from "src/store/Auth";
import { STATUS_LOADING } from "src/domains";

export const ProjectsUser = observer(() => {
  const idHostUser = AuthStore.user?.id;
  let { userId } = useParams();

  const { projects, loading, size, offset, limit } = StoreProjectsUser;

  React.useEffect(() => {
    const id = Number(userId || idHostUser);
    if (id && id !== StoreProjectsUser.userIdProjects) {
      StoreProjectsUser.userIdProjects = id;
    }
    if (!id) {
      StoreProjectsUser.userIdProjects = null;
    }
  }, [userId, idHostUser]);

  const CreateProject = () => {
    StoreProjectsUser.createNewProject();
  };
  const ShowMore = (event: any) => {
    StoreProjectsUser.offset = event.selected + 1;
  };

  return (
    <div>
      <Wrapper
        ShowMore={ShowMore}
        createNewProject={CreateProject}
        nameSection={"Мои проекты"}
        projects={projects}
        loading={loading}
        size={size}
        limit={limit}
        offset={offset}
      />
    </div>
  );
});
