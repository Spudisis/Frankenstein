import React from "react";

import { LastProject } from "./store/Store";
import { observer } from "mobx-react-lite";
import { NameSection } from "src/UI";
import { NotFoundProject, Project } from "./components";
import { Root } from "./LastUpdatedProject.styles";
export const LastUpdatedProject = observer(() => {
  React.useEffect(() => {
    LastProject.getLastUpdateProject();
  }, []);
  return (
    <Root>
      <NameSection>Last updated</NameSection>
      {LastProject.lastProject ? (
        <Project {...LastProject.lastProject} />
      ) : (
        <NotFoundProject />
      )}
    </Root>
  );
});
