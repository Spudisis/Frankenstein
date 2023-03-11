import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form/dist/types";
import { IFormInput } from "../../modules/Registration/components/Form";
import { Email, PropsEmailInput } from "../Auth/Email";
import { Password } from "../Auth/Password";

export const RestorePassInputs = ({
  register,
  errors,
}: Omit<PropsEmailInput, "repeatPass">) => {
  return (
    <>
      <Email register={register} errors={errors} />
      <Password register={register} errors={errors} />
      <Password register={register} errors={errors} repeatPass />
    </>
  );
};
