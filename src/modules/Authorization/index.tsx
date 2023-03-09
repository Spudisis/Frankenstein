import React from "react";
import { ApplicationWrapperStyled } from "../../UI";
import { Form } from "./components/Form";
import { RedirectToAuth } from "../../components";
import { FormType } from "../../components/Auth/Redirect";

export const Authorization = () => {
  return (
    <>
      <Form />
      <RedirectToAuth
        text="Ещё нет аккаунта?"
        textButton="Зарегистрируйтесь"
        Form={FormType.Auth}
      />
    </>
  );
};
