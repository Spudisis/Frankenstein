import React from 'react'
import { Trans } from 'react-i18next'
import { ErrorLabel } from 'src/UI'
import { type PropsInput } from '../../ProfileChange.types'
import { InputWrapper } from '../InputWrapper'

export const Password = ({ register, repeatPass, errors }: PropsInput) => {
  const bool = repeatPass ? !!errors.passwordRepeat?.type : !!errors.password?.type
  return (
    <InputWrapper>
      <label>
        {repeatPass ? (
          <Trans i18nKey="Auth.RepeatPassword">Repeat password</Trans>
        ) : (
          <Trans i18nKey="Auth.Password">Password</Trans>
        )}
        <input
          aria-invalid={bool}
          type="password"
          {...register(repeatPass ? 'passwordRepeat' : 'password')}
          placeholder="*****"
        />
      </label>
      {repeatPass ? (
        <>
          {errors.passwordRepeat?.message && (
            <ErrorLabel>
              <Trans i18nKey={`Auth.errors.${errors.passwordRepeat?.message}`}></Trans>
            </ErrorLabel>
          )}
        </>
      ) : (
        <>
          {errors.password?.message && (
            <ErrorLabel>
              <Trans i18nKey={`Auth.errors.${errors.password?.message}`}></Trans>
            </ErrorLabel>
          )}
        </>
      )}
    </InputWrapper>
  )
}
