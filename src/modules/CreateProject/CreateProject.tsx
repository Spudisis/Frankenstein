import React from "react";
import { NameSection } from "src/UI";
import { StoreProjectCreate } from "./store/Store";
import { useNavigate } from "react-router-dom";
import { BUILD_URL } from "src/routes/urlsPages";
import { observer } from "mobx-react-lite";

import { Form } from "./components";
import { OptionCreate } from "src/domains";

export const CreateProject = observer(() => {
  const { loading } = StoreProjectCreate;
  const redirect = useNavigate();

  const AddProject = async ({
    projectName,
    statusAccess,
    miniature,
  }: OptionCreate) => {
    const uid = await StoreProjectCreate.createNewProject({
      projectName,
      statusAccess,
      miniature,
    });
    if (!uid) {
      return;
    }
    redirect(BUILD_URL + uid);
  };

  return (
    <div>
      <NameSection>Create project</NameSection>
      <Form AddProject={AddProject} statusLoading={loading} />
    </div>
  );
});
