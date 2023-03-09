import React from "react";
import { ApplicationWrapperStyled, Bgc } from "../../UI";
import { Registration as RegistrationModule } from "../../modules";
export const Registration = () => {
  return (
    <Bgc>
      <ApplicationWrapperStyled>
        <RegistrationModule />
      </ApplicationWrapperStyled>
    </Bgc>
  );
};
