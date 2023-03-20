import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Email, Password, SignWith } from "../../../components";
import { DefaultButton, Head, WrapperAuth, FormWrapper } from "../../../UI";
import { IFormInput } from "../../Registration/components/Form";
import { RestorePassword } from "./RestorePassword";
import { Trans } from "react-i18next";

const formSchema = yup.object().shape({
  Email: yup
    .string()
    .required("required")
    .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i, "EmailMatches"),
  password: yup
    .string()
    .required("requiredPassword")
    .min(3, "minPassLen")
    .max(20, "maxPassLen"),
});

export const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>({
    mode: "onBlur",
    resolver: yupResolver(formSchema),
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data);
  };

  const ButtonText = (
    <Trans i18nKey="Auth.Authorization.ButtonAuth">Войти</Trans>
  );
  const HeadText = <Trans i18nKey="Auth.Authorization.titleAuth">Вход</Trans>;
  return (
    <WrapperAuth>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <Head text={HeadText} />
        <Email register={register} errors={errors}></Email>
        <Password register={register} errors={errors} />
        <RestorePassword />
        <DefaultButton
          text={ButtonText}
          fontSize={32}
          marginT={60}
          width="100%"
        />
        <SignWith />
      </FormWrapper>
    </WrapperAuth>
  );
};
