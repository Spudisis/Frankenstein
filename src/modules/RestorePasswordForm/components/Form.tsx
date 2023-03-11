import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { DefaultButton, FormWrapper, Head, WrapperAuth } from "../../../UI";
import { RestorePassInputs } from "../../../components/RestorePassword/RestorePassInputs";
import { IFormInput } from "../../Registration/components/Form";
import { AccessCode } from "./AccessCode";

const formSchema = yup.object().shape({
  Email: yup
    .string()
    .required("Required")
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i,
      "It's not Email"
    ),
  password: yup
    .string()
    .required("Password is required")
    .min(3, "Min 3 length")
    .max(20, "Max 20 length"),
  passwordRepeat: yup
    .string()
    .required("Confirm Password is required")
    .min(3, "Min 3 length")
    .max(20, "Max 20 length")
    .oneOf([yup.ref("password")], "Passwords do not match"),
  accessCode: yup
    .string()
    .required("Required")
    .min(6, "6 length")
    .max(6, "6 length"),
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
      return setError("Email", { message: "No email" });
    }
    setSendInterval(true);
  };
  //при отправке вешать Loading, выдавать ошибку если код неверный
  return (
    <WrapperAuth>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <Head text="Восстановление пароля" />
        <RestorePassInputs errors={errors} register={register} />
        <AccessCode
          errors={errors}
          register={register}
          handleClick={handleClick}
          sendCode={sendCode}
          setSendInterval={setSendInterval}
          setError={setError}
        />

        <DefaultButton text="Восстановить пароль" fontSize={32} />
      </FormWrapper>
    </WrapperAuth>
  );
};
