import React from "react";
import { FieldErrors } from "react-hook-form";

import { UseFormRegister } from "react-hook-form/dist/types/form";
import { IFormInput } from "../../modules/Registration/components/Form";
import { AuthInput, ErrorLabel } from "../../UI";

export type PropsEmailInput = {
  register: UseFormRegister<IFormInput>;
  repeatPass?: boolean;
  errors: FieldErrors<IFormInput>;
};

export const Email = ({ register, errors }: PropsEmailInput) => {
  return (
    <AuthInput error={errors.Email?.message ? true : false}>
      <>
        <label>
          Email
          <input
            aria-invalid={errors.Email?.type ? true : false}
            {...register("Email")}
            placeholder="example@gmail.com"
          />
        </label>
        <>
          {errors.Email?.message && (
            <ErrorLabel>{errors.Email?.message}</ErrorLabel>
          )}
        </>
      </>
    </AuthInput>
  );
};
