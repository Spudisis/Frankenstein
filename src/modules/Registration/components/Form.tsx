import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Captcha,
  CheckBox,
  Email,
  Password,
  SignWith,
} from "../../../components";
import { DefaultButton, Head, WrapperAuth, FormWrapper } from "../../../UI";
import { Trans } from "react-i18next";

export interface IFormInput {
  Email: string;
  password: string;
  passwordRepeat: number;
  checkBox: boolean;
  accessCode: string;
}

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
  passwordRepeat: yup
    .string()
    .required("confirmReqPass")
    .min(3, "minPassLen")
    .max(20, "maxPassLen")
    .oneOf([yup.ref("password")], "AccessPass"),
  checkBox: yup.bool().oneOf([true], "checkBox"),
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

  const [captchaRes, setCaptchaRes] = React.useState<boolean | null>(null);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    if (!captchaRes) {
      return setCaptchaRes(false);
    }
    console.log(data);
  };

  const HeadText = (
    <Trans i18nKey="Auth.Registration.titleRegistration">Registration</Trans>
  );
  const ButtonText = (
    <Trans i18nKey="Auth.Registration.ButtonRegistration">
      Зарегистрироваться
    </Trans>
  );

  return (
    <WrapperAuth>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <Head text={HeadText} />
        <Email register={register} errors={errors}></Email>
        <Password register={register} errors={errors} />
        <Password register={register} repeatPass errors={errors} />
        <CheckBox register={register} errors={errors}></CheckBox>
        <SignWith />

        <Captcha setCaptchaRes={setCaptchaRes} captchaRes={captchaRes} />

        <DefaultButton text={ButtonText} fontSize={32} />
      </FormWrapper>
    </WrapperAuth>
  );
};
