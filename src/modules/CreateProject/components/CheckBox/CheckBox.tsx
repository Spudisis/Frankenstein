import React from 'react'
import { type PropsInputs } from '../Form'
import { CustomCheckBox, ErrorLabel } from 'src/UI'

export const CheckBox = ({ register, errors }: PropsInputs) => {
  return (
    <CustomCheckBox error={!!errors.statusAccess?.message}>
      <>
        <label title="Открытый проект">
          <input aria-invalid={!!errors.statusAccess?.type} type="checkbox" {...register('statusAccess')} />
          <span>Открытый проект</span>
        </label>
        {errors.statusAccess?.message && <ErrorLabel>{errors.statusAccess?.message}</ErrorLabel>}
      </>
    </CustomCheckBox>
  )
}
