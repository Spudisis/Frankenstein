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
  checkBox: yup.bool().oneOf([true], "Field must be checked"),
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

  return (
    <WrapperAuth>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <Head text={"Регистрация"} />
        <Email register={register} errors={errors}></Email>
        <Password register={register} errors={errors} />
        <Password register={register} repeatPass errors={errors} />
        <CheckBox register={register} errors={errors}></CheckBox>
        <SignWith />

        <Captcha setCaptchaRes={setCaptchaRes} captchaRes={captchaRes} />

        <DefaultButton text="Зарегистрироваться" fontSize={32} />
      </FormWrapper>
    </WrapperAuth>
  );
};
