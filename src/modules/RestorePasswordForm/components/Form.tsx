import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { DefaultButton, FormWrapper, Head, WrapperAuth } from "../../../UI";
import { RestorePassInputs } from "../../../components/RestorePassword/RestorePassInputs";
import { IFormInput } from "../../Registration/components/Form";
import { AccessCode } from "./AccessCode";
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
  passwordRepeat: yup
    .string()
    .required("confirmReqPass")
    .min(3, "minPassLen")
    .max(20, "maxPassLen")
    .oneOf([yup.ref("password")], "AccessPass"),
  accessCode: yup.string().required("required").length(6, "AccessCodeLength"),
});

export const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    setError,
  } = useForm<IFormInput>({
    mode: "onBlur",
    resolver: yupResolver(formSchema),
  });
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data);
  };
  const [sendCode, setSendInterval] = React.useState(false);
  const handleClick = () => {
    const values = getValues();
    console.log(values);
    if (
      !values.Email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i) ||
      errors.Email
    ) {
      return setError("Email", { message: "required" });
    }
    setSendInterval(true);
  };
  //при отправке вешать Loading, выдавать ошибку если код неверный

  const TextButton = (
    <Trans i18nKey={"Auth.PassRecovery.ButtonName"}>Password recovery</Trans>
  );
  const TextHead = (
    <Trans i18nKey={"Auth.PassRecovery.title"}>Restore password</Trans>
  );
  return (
    <WrapperAuth>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <Head text={TextHead} />
        <RestorePassInputs errors={errors} register={register} />
        <AccessCode
          errors={errors}
          register={register}
          handleClick={handleClick}
          sendCode={sendCode}
          setSendInterval={setSendInterval}
          setError={setError}
        />

        <DefaultButton text={TextButton} fontSize={32} />
      </FormWrapper>
    </WrapperAuth>
  );
};
