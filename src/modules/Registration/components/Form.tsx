import React from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'

import { Captcha, CheckBox, Email, Password, SignWith } from '../../../components'
import { DefaultButton, Head, WrapperAuth, FormWrapper, StyledErrorReq } from '../../../UI'
import { Trans } from 'react-i18next'
import { observer } from 'mobx-react-lite'
import { StoreReg } from '../store'
import { STATUS_LOADING } from 'src/domains'
import { RESOLVER } from './Form.schema'
import { type IFormInput } from './Form.types'

export const Form = observer(() => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError
  } = useForm<IFormInput>({
    mode: 'onBlur',
    resolver: RESOLVER
  })
  const StatusLoading = StoreReg.loading === STATUS_LOADING.LOADING
  const [captchaRes, setCaptchaRes] = React.useState<boolean | null>(null)

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    if (!captchaRes) {
      setCaptchaRes(false)
      return
    }
    StoreReg.Registration({ Email: data.Email, password: data.password })
  }

  const HeadText = <Trans i18nKey="Auth.Registration.titleRegistration">Registration</Trans>
  const ButtonText = <Trans i18nKey="Auth.Registration.ButtonRegistration">Зарегистрироваться</Trans>

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

        <DefaultButton text={ButtonText} fontSize={32} width="100%" disabled={StatusLoading} />
        {StoreReg.loading === STATUS_LOADING.ERROR && <StyledErrorReq>{StoreReg.error}</StyledErrorReq>}
      </FormWrapper>
    </WrapperAuth>
  )
})
