import React from 'react'
import { StyledHead } from './NamePage.styles'
import { type TypeNamePage } from './NamePage.types'

export const NamePage = ({ name }: TypeNamePage) => {
  return <StyledHead>{name}</StyledHead>
}
