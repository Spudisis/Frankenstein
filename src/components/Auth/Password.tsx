import React from "react";
import { Trans } from "react-i18next";
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
        {repeatPass ? (
          <Trans i18nKey="Auth.RepeatPassword">Repeat password</Trans>
        ) : (
          <Trans i18nKey="Auth.Password">Password</Trans>
        )}
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
            <ErrorLabel>
              <Trans
                i18nKey={`Auth.errors.${errors.passwordRepeat?.message}`}
              ></Trans>
            </ErrorLabel>
          )}
        </>
      ) : (
        <>
          {errors.password?.message && (
            <ErrorLabel>
              <Trans
                i18nKey={`Auth.errors.${errors.password?.message}`}
              ></Trans>
            </ErrorLabel>
          )}
        </>
      )}
    </AuthInput>
  );
};
