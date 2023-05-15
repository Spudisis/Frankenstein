import { observer } from "mobx-react-lite";
import React from "react";
import { DefaultButton, SidebarName } from "src/UI";
import { Wrapper } from "./ParamsProject.styles";
import { ProjectOption } from "../../store";
import App from "src/store/Application";
import { STATUS_LOADING } from "src/domains";
import { useNavigate } from "react-router-dom";
import { main } from "src/routes/urlsPages";
export const ParamsProject = observer(() => {
  const { uid } = App.project;
  const { loading } = ProjectOption;
  const redirect = useNavigate();
  const deleteProject = async () => {
    if (!uid) {
      return console.log("uid отсутствует");
    }
    const res = await ProjectOption.deleteProject(uid);
    if (res) {
      redirect(main);
    }
  };

  const statusLoad = loading === STATUS_LOADING.LOADING;
  return (
    <div>
      <SidebarName>Params</SidebarName>
      <Wrapper>
        <DefaultButton
          text={"Delete project"}
          padding1800="5px 10px"
          fontSize={24}
          width="100%"
          disabled={statusLoad}
          onClick={deleteProject}
        />
      </Wrapper>
    </div>
  );
});
