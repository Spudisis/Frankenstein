import React from "react";
import { UseFormSetError } from "react-hook-form";
import { Trans } from "react-i18next";

import { PropsEmailInput } from "../../../components/Auth/Email";
import { AuthInput, ButtonCode, ErrorLabel, WrapperCode } from "../../../UI";
import { IFormInput } from "../../Registration/components/Form.types";

type Props = {
  handleClick: () => void;
  sendCode: boolean;
  setSendInterval: (b: boolean) => void;
  setError: UseFormSetError<IFormInput>;
  disabled: boolean;
};

export const AccessCode = ({
  register,
  errors,
  handleClick,
  sendCode,
  setSendInterval,
  setError,
  disabled,
}: PropsEmailInput & Props) => {
  const [time, setTime] = React.useState(60);

  React.useEffect(() => {
    const interval = setInterval(() => {
      sendCode && setTime((time) => time - 1);
    }, 1000);
    if (sendCode) {
      setError("accessCode", { message: "CheckEmail" });
    }
    return () => {
      clearInterval(interval);
    };
  }, [sendCode]);
  React.useEffect(() => {
    if (time === 0) {
      setSendInterval(false);
      setTime(60);
    }
  }, [time]);
  return (
    <AuthInput error={errors.accessCode?.message ? true : false}>
      <label>
        <Trans i18nKey={"Auth.PassRecovery.AccessCode"}>Access code</Trans>

        <WrapperCode>
          <input
            {...register("accessCode")}
            type="text"
            placeholder="***-***"
          />
          <ButtonCode
            onClick={() => handleClick()}
            disabled={sendCode || disabled ? true : false}
          >
            {!sendCode ? (
              <Trans i18nKey={"Auth.PassRecovery.giveMeCode"}>Send code</Trans>
            ) : (
              time
            )}
          </ButtonCode>
        </WrapperCode>
      </label>
      <>
        {errors.accessCode?.message && (
          <ErrorLabel>
            <Trans
              i18nKey={`Auth.errors.${errors.accessCode?.message}`}
            ></Trans>
          </ErrorLabel>
        )}
      </>
    </AuthInput>
  );
};
