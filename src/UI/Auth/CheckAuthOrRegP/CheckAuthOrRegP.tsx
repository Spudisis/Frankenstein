import React from 'react'
import styled from 'styled-components'
import { type ChildrenProp } from '../../ChildrenProp'

export const CheckAuthOrRegP = ({ children }: ChildrenProp) => {
  return <StyledP>{children}</StyledP>
}

const StyledP = styled.p`
  font-size: 24px;
  color: white;
  text-align: center;
  @media screen and (max-width: 1800px) {
    font-size: 20px;
  }
  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
`
