import React from "react";
import { ApplicationWrapperStyled } from "../../UI";
import { Form } from "./components/Form";
import { RedirectToAuth } from "../../components";
import { FormType } from "../../components/Auth/Redirect";

export const Registration = () => {
  return (
    <>
      <Form />
      <RedirectToAuth text="Уже есть аккаунт?" textButton="Авторизируйтесь" Form={FormType.Registration}/>
    </>
  );
};
