import React from 'react'
import { Trans } from 'react-i18next'
import { CustomCheckBox, ErrorLabel } from '../../UI'
import { type PropsEmailInput } from './Email'

export const CheckBox = ({ register, errors }: PropsEmailInput) => {
  return (
    <CustomCheckBox error={!!errors.checkBox?.message}>
      <>
        <label title="Согласие на обработку личных данных">
          <input aria-invalid={!!errors.checkBox?.type} type="checkbox" {...register('checkBox')} />
          <span>
            <Trans i18nKey="Auth.AcceptPersonData">Согласен на обработку личных данных</Trans>
          </span>
        </label>
        {errors.checkBox?.message && (
          <ErrorLabel>
            <Trans i18nKey={`Auth.errors.${errors.checkBox?.message}`}></Trans>
          </ErrorLabel>
        )}
      </>
    </CustomCheckBox>
  )
}
