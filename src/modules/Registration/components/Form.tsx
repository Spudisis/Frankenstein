import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import {
  Captcha,
  CheckBox,
  Email,
  Password,
  SignWith,
} from "../../../components";
import { DefaultButton, Head, WrapperAuth, FormWrapper, StyledErrorReq } from "../../../UI";
import { Trans } from "react-i18next";
import { observer } from "mobx-react-lite";
import { AuthStore } from "../../../store/Auth";
import { STATUS_LOADING } from "../../../store/types/StatusLoading";
import { RESOLVER } from "./Form.schema";
import { IFormInput } from "./Form.types";

export const Form = observer(() => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<IFormInput>({
    mode: "onBlur",
    resolver: RESOLVER,
  });
  const StatusLoading = AuthStore.loading === STATUS_LOADING.LOADING;
  const [captchaRes, setCaptchaRes] = React.useState<boolean | null>(null);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    if (!captchaRes) {
      return setCaptchaRes(false);
    }
    AuthStore.Registration({ Email: data.Email, password: data.password });
  };

  const HeadText = (
    <Trans i18nKey="Auth.Registration.titleRegistration">Registration</Trans>
  );
  const ButtonText = (
    <Trans i18nKey="Auth.Registration.ButtonRegistration">
      Зарегистрироваться
    </Trans>
  );

  return (
    <WrapperAuth>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <Head text={HeadText} />
        <Email register={register} errors={errors}></Email>
        <Password register={register} errors={errors} />
        <Password register={register} repeatPass errors={errors} />
        <CheckBox register={register} errors={errors}></CheckBox>
        <SignWith />

        <Captcha setCaptchaRes={setCaptchaRes} captchaRes={captchaRes} />

        <DefaultButton
          text={ButtonText}
          fontSize={32}
          width="100%"
          disabled={StatusLoading}
        />
        {AuthStore.loading === STATUS_LOADING.ERROR && (
          <StyledErrorReq>Произошла непредвиденная ошибка</StyledErrorReq>
        )}
      </FormWrapper>
    </WrapperAuth>
  );
});
