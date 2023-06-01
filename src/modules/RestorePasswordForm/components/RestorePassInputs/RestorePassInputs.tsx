import React from 'react'
import { Email, type PropsEmailInput } from 'src/components/Auth/Email'
import { Password } from 'src/components/Auth/Password'

export const RestorePassInputs = ({ register, errors }: Omit<PropsEmailInput, 'repeatPass'>) => {
  return (
    <>
      <Email register={register} errors={errors} />
      <Password register={register} errors={errors} />
      <Password register={register} errors={errors} repeatPass />
    </>
  )
}
