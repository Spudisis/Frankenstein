import React from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { Email, ModalAccessEmail, Password, SignWith } from 'src/components'
import { DefaultButton, Head, WrapperAuth, FormWrapper, StyledErrorReq } from '../../../UI'
import { type IFormInput } from '../../Registration/components/Form.types'
import { RestorePassword } from './RestorePassword'
import { Trans } from 'react-i18next'
import { observer } from 'mobx-react-lite'
import { AuthFormStore } from '../store'
import { STATUS_LOADING } from '../../../domains'
import { RESOLVER } from './Form.schema'

export const Form = observer(() => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<IFormInput>({
    mode: 'onBlur',
    resolver: RESOLVER
  })
  const StatusLoading = AuthFormStore.loading === STATUS_LOADING.LOADING
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const res = AuthFormStore.Authorization({
      Email: data.Email,
      password: data.password
    })
  }

  const ButtonText = <Trans i18nKey="Auth.Authorization.ButtonAuth">Войти</Trans>
  const HeadText = <Trans i18nKey="Auth.Authorization.titleAuth">Вход</Trans>
  return (
    <WrapperAuth>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <Head text={HeadText} />
        <Email register={register} errors={errors}></Email>
        <Password register={register} errors={errors} />
        <RestorePassword />
        <DefaultButton text={ButtonText} fontSize={32} marginT={60} width="100%" disabled={StatusLoading} />
        {AuthFormStore.loading === STATUS_LOADING.ERROR && <StyledErrorReq>{AuthFormStore.error}</StyledErrorReq>}
        <SignWith />
      </FormWrapper>
    </WrapperAuth>
  )
})
