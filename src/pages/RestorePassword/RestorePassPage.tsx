import React from 'react'
import { RestorePassForm, SelectLanguage } from '../../modules'
import { ApplicationWrapperStyled, Bgc } from '../../UI'

export const RestorePassPage = () => {
  return (
    <Bgc>
      <ApplicationWrapperStyled>
        <SelectLanguage />
        <RestorePassForm />
      </ApplicationWrapperStyled>
    </Bgc>
  )
}
