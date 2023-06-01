import React from 'react'
import styled from 'styled-components'

import { type ChildrenProp } from '../ChildrenProp'

export const MobileMain = ({ children }: ChildrenProp) => {
  return <MobileMainStyled>{children}</MobileMainStyled>
}

const MobileMainStyled = styled.div`
  overflow-x: auto;
  height: 100%;
  width: 100%;
`
