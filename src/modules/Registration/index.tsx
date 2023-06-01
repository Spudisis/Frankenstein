import React from 'react'
import { ApplicationWrapperStyled } from '../../UI'
import { Form } from './components/Form'
import { RedirectToAuth } from '../../components'
import { FormType } from '../../components/Auth/Redirect'
import { Trans } from 'react-i18next'

export const Registration = () => {
  const TextRedirect = <Trans i18nKey="Auth.Registration.TextRedirectAuth">Уже есть аккаунт?</Trans>
  const TextRedirectButton = <Trans i18nKey="Auth.Registration.TextRedirectAuthButton">Авторизируйтесь</Trans>
  return (
    <>
      <Form />
      <RedirectToAuth text={TextRedirect} textButton={TextRedirectButton} Form={FormType.Registration} />
    </>
  )
}
