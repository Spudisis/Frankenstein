import React from 'react'
import { ButtonHeader } from './ButtonHead.styles'
import { type TypeButton } from './ButtonHead.types'

export const Button = ({ text }: TypeButton) => {
  return <ButtonHeader>{text}</ButtonHeader>
}
