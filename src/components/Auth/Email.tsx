import React from 'react'
import { type FieldErrors } from 'react-hook-form'

import { type UseFormRegister } from 'react-hook-form/dist/types/form'
import { Trans } from 'react-i18next'
import { type IFormInput } from '../../modules/Registration/components/Form.types'
import { AuthInput, ErrorLabel } from '../../UI'

export interface PropsEmailInput {
  register: UseFormRegister<IFormInput>
  repeatPass?: boolean
  errors: FieldErrors<IFormInput>
}

export const Email = ({ register, errors }: PropsEmailInput) => {
  return (
    <AuthInput error={!!errors.Email?.message}>
      <>
        <label>
          <Trans i18nKey="Auth.Email">Email</Trans>
          <input aria-invalid={!!errors.Email?.type} {...register('Email')} placeholder="example@gmail.com" />
        </label>
        <>
          {errors.Email?.message && (
            <ErrorLabel>
              <Trans i18nKey={`Auth.errors.${errors.Email?.message}`}></Trans>
            </ErrorLabel>
          )}
        </>
      </>
    </AuthInput>
  )
}
