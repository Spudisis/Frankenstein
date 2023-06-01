import React from 'react'
import { ApplicationWrapperStyled } from '../../UI'
import { Form } from './components/Form'
import { RedirectToAuth } from '../../components'
import { FormType } from '../../components/Auth/Redirect'
import { Trans } from 'react-i18next'

export const Authorization = () => {
  const TextRedirectReg = <Trans i18nKey="Auth.Authorization.TextRedirectReg">Еще нет аккаунта?</Trans>
  const TextRedirectButtonReg = <Trans i18nKey="Auth.Authorization.TextRedirectRegButton">Зарегистрируйтесь</Trans>
  return (
    <>
      <Form />
      <RedirectToAuth text={TextRedirectReg} textButton={TextRedirectButtonReg} Form={FormType.Auth} />
    </>
  )
}
