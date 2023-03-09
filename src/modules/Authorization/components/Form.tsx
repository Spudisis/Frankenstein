import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Email, Password, SignWith } from "../../../components";
import { DefaultButton, Head, WrapperAuth, FormWrapper } from "../../../UI";
import { IFormInput } from "../../Registration/components/Form";

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
  return (
    <WrapperAuth>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <Head text={"Вход"} />
        <Email register={register} errors={errors}></Email>
        <Password register={register} errors={errors} />

        <DefaultButton text="Войти" fontSize={32} marginT={60} />
        <SignWith />
      </FormWrapper>
    </WrapperAuth>
  );
};
