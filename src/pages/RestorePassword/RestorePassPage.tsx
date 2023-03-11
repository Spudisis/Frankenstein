import React from "react";
import { RestorePassForm } from "../../modules";
import { ApplicationWrapperStyled, Bgc } from "../../UI";

export const RestorePassPage = () => {
  return (
    <Bgc>
      <ApplicationWrapperStyled>
        <RestorePassForm />
      </ApplicationWrapperStyled>
    </Bgc>
  );
};
