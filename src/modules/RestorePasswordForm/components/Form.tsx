import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import {
  DefaultButton,
  FormWrapper,
  Head,
  StyledErrorReq,
  WrapperAuth,
} from "../../../UI";
import { RestorePassInputs } from "components/RestorePassword/RestorePassInputs";
import { IFormInput } from "../../Registration/components/Form.types";
import { AccessCode } from "./AccessCode";
import { Trans } from "react-i18next";
import { observer } from "mobx-react-lite";
import { AuthStore } from "../../../store/Auth";
import { STATUS_LOADING } from "../../../store/types/StatusLoading";
import { RESOLVER } from "./Form.schema";
import { ERROR_MESSAGES } from "./Form.constants";

export const Form = observer(() => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    setError,
  } = useForm<IFormInput>({
    mode: "onBlur",
    resolver: RESOLVER,
  });
  const [errorMsg, setErrorMsg] = React.useState(ERROR_MESSAGES.unknownError);
  const StatusLoading = AuthStore.loading === STATUS_LOADING.LOADING;

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const { Email, password, accessCode } = data;
    const res = await AuthStore.restorePassword({
      Email,
      password,
      accessCode,
    });
    // if (!res) setErrorMsg(ERROR_MESSAGES.invalidCode);
    //тут надо обработать если такой email уже есть
    // setErrorMsg(ERROR_MESSAGES.invalidEmail)
  };
  const [sendCode, setSendInterval] = React.useState(false);
  const handleClick = async () => {
    const values = getValues();
    console.log(values);
    if (
      !values.Email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i) ||
      errors.Email
    ) {
      return setError("Email", { message: "required" });
    }

    const data = await AuthStore.getCodeForRestore({ Email: values.Email });
    if (data) setSendInterval(true);
  };
  // выдавать ошибку если код неверный

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

        <DefaultButton
          text={TextButton}
          fontSize={32}
          width="100%"
          disabled={StatusLoading}
        />
        {AuthStore.loading === STATUS_LOADING.ERROR && (
          <StyledErrorReq>{errorMsg}</StyledErrorReq>
        )}
      </FormWrapper>
    </WrapperAuth>
  );
});
