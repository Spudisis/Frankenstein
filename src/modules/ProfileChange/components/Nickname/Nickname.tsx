import React from 'react'

import { Trans } from 'react-i18next'
import { ErrorLabel } from 'src/UI'
import { type PropsInput } from '../../ProfileChange.types'
import { InputWrapper } from '../InputWrapper'

export const Nickname = ({ register, errors }: PropsInput) => {
  return (
    <InputWrapper>
      <label>
        <Trans i18nKey="Auth.nickname">Nickname</Trans>
        <input aria-invalid={!!errors.nickname?.type} {...register('nickname')} placeholder="Your nickname" />
      </label>
      <>
        {errors.nickname?.message && (
          <ErrorLabel>
            <Trans i18nKey={`Auth.errors.${errors.nickname?.message}`}></Trans>
          </ErrorLabel>
        )}
      </>
    </InputWrapper>
  )
}
