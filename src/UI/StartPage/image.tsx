import React from 'react'
import styled from 'styled-components'
import { type ChildrenProp } from '../ChildrenProp'

export const Image = ({ children }: ChildrenProp) => {
  return <StyledImage>{children}</StyledImage>
}

const StyledImage = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`
