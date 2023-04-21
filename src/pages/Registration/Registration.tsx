import React from "react";
import { ApplicationWrapperStyled, Bgc } from "../../UI";
import { Registration as RegistrationModule, SelectLanguage } from "../../modules";
export const Registration = () => {
  return (
    <Bgc>
      <ApplicationWrapperStyled>
        <SelectLanguage />
        <RegistrationModule />
      </ApplicationWrapperStyled>
    </Bgc>
  );
};
