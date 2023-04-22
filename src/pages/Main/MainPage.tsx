import React from "react";
import { Header, ProjectsUser } from "src/modules";
import { Bgc, DefaultWrapper } from "src/UI";

export const MainPage = () => {
  return (
    <Bgc>
      <Header />
      <DefaultWrapper>
        <ProjectsUser />
      </DefaultWrapper>
    </Bgc>
  );
};
