import React from "react";
import { AuthInput, ErrorLabel } from "../../UI";
import { PropsEmailInput } from "./Email";

export const Password = ({ register, repeatPass, errors }: PropsEmailInput) => {
  const bool = repeatPass
    ? errors.passwordRepeat?.type
      ? true
      : false
    : errors.password?.type
    ? true
    : false;
  return (
    <AuthInput error={bool}>
      <label>
        {repeatPass ? "Repeat password" : "Password"}
        <input
          aria-invalid={bool}
          type="password"
          {...register(repeatPass ? "passwordRepeat" : "password")}
          placeholder="*****"
        />
      </label>
      {repeatPass ? (
        <>
          {errors.passwordRepeat?.message && (
            <ErrorLabel>{errors.passwordRepeat?.message}</ErrorLabel>
          )}
        </>
      ) : (
        <>
          {errors.password?.message && (
            <ErrorLabel>{errors.password?.message}</ErrorLabel>
          )}
        </>
      )}
    </AuthInput>
  );
};
