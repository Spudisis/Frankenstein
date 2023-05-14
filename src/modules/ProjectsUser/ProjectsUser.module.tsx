import React from "react";

import { StoreProjectsUser } from "./store/store";
import { Wrapper } from "src/components/WrapperProjects";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { AuthStore } from "src/store/Auth";

export const ProjectsUser = observer(() => {
  //сделать так, чтобы в личном профиле в своем акке выдавало свои проекты, а при просмотре чужого акка - его проекты
  const idHostUser = AuthStore.user?.id;
  let { userId } = useParams();

  const { projects, loading, size } = StoreProjectsUser;

  React.useEffect(() => {
    const id = Number(userId || idHostUser);
    if (id) {
      StoreProjectsUser.userIdProjects = id;
      StoreProjectsUser.initialProjects();
    }
  }, [userId, idHostUser]);
  const CreateProject = () => {
    StoreProjectsUser.createNewProject();
  };
  return (
    <div>
      <Wrapper
        createNewProject={CreateProject}
        nameSection={"Мои проекты"}
        projects={projects}
        loading={loading}
        size={size}
        sizeMin={4}
      />
    </div>
  );
});
