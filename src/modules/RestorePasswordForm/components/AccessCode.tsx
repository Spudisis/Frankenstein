import React from "react";
import { UseFormSetError } from "react-hook-form";

import { PropsEmailInput } from "../../../components/Auth/Email";
import { AuthInput, ButtonCode, ErrorLabel, WrapperCode } from "../../../UI";
import { IFormInput } from "../../Registration/components/Form";

type Props = {
  handleClick: () => void;
  sendCode: boolean;
  setSendInterval: (b: boolean) => void;
  setError: UseFormSetError<IFormInput>;
};

export const AccessCode = ({
  register,
  errors,
  handleClick,
  sendCode,
  setSendInterval,
  setError,
}: PropsEmailInput & Props) => {
  const [time, setTime] = React.useState(60);

  React.useEffect(() => {
    const interval = setInterval(() => {
      sendCode && setTime((time) => time - 1);
    }, 1000);
    if (sendCode) {
      setError("accessCode", { message: "Check Email" });
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
        Access code
        <WrapperCode>
          <input
            {...register("accessCode")}
            type="text"
            placeholder="***-***"
          />
          <ButtonCode
            onClick={() => handleClick()}
            disabled={sendCode ? true : false}
          >
            {!sendCode ? "Получить код" : time}
          </ButtonCode>
        </WrapperCode>
      </label>
      <>
        {errors.accessCode?.message && (
          <ErrorLabel>{errors.accessCode?.message}</ErrorLabel>
        )}
      </>
    </AuthInput>
  );
};
