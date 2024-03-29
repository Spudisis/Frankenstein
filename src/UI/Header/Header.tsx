import React from 'react'
import styled from 'styled-components'
import { type ChildrenProp } from '../ChildrenProp'

export const HeaderWrapper = ({ children }: ChildrenProp) => {
  return <HeaderStyled>{children}</HeaderStyled>
}

const HeaderStyled = styled.header`
  height: 80px;
  width: 100%;
  background-color: var(--color-bgc-header);
  color: white;
`
