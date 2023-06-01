import React from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'

import { DefaultButton, FormWrapper, Head, StyledErrorReq, WrapperAuth } from 'src/UI'
import { RestorePassInputs } from './RestorePassInputs'
import { type IFormInput } from '../../Registration/components/Form.types'
import { AccessCode } from './AccessCode'
import { Trans } from 'react-i18next'
import { observer } from 'mobx-react-lite'
import { RestoreStore } from '../store/store'
import { STATUS_LOADING } from 'src/domains'
import { RESOLVER } from './Form.schema'

export const Form = observer(() => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    setError
  } = useForm<IFormInput>({
    mode: 'onBlur',
    resolver: RESOLVER
  })

  const StatusLoading = RestoreStore.loading === STATUS_LOADING.LOADING

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const { Email, password, accessCode } = data
    await RestoreStore.restorePassword({
      Email,
      password,
      accessCode
    })
  }
  const [sendCode, setSendInterval] = React.useState(false)
  const handleClick = async () => {
    const values = getValues()
    console.log(values)
    if (!values.Email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i) || errors.Email) {
      setError('Email', { message: 'required' })
      return
    }

    const data = await RestoreStore.getCodeForRestore({ Email: values.Email })
    if (data) setSendInterval(true)
  }

  const TextButton = <Trans i18nKey={'Auth.PassRecovery.ButtonName'}>Password recovery</Trans>
  const TextHead = <Trans i18nKey={'Auth.PassRecovery.title'}>Restore password</Trans>
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
          disabled={StatusLoading}
        />

        <DefaultButton text={TextButton} fontSize={32} width="100%" disabled={StatusLoading} />
        {RestoreStore.loading === STATUS_LOADING.ERROR && <StyledErrorReq>{RestoreStore.error}</StyledErrorReq>}
      </FormWrapper>
    </WrapperAuth>
  )
})
