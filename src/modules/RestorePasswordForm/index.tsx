import React from "react";
import { RedirectToAuth } from "../../components";
import { FormType } from "../../components/Auth/Redirect";
import { Form } from "./components/Form";

export const RestorePassForm = () => {
  return (
    <>
      <Form />
      <RedirectToAuth
        text="Уже есть аккаунт?"
        textButton="Авторизируйтесь"
        Form={FormType.Registration}
      />
    </>
  );
};
