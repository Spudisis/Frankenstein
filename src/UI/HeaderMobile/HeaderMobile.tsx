import React from 'react'
import styled from 'styled-components'

import { type ChildrenProp } from '../ChildrenProp'
import { type ConnectDropTarget } from 'react-dnd'

export const HeaderMobile = ({ children, refDrag }: ChildrenProp & { refDrag: ConnectDropTarget }) => {
  return <StyledHeaderMobile ref={refDrag}>{children}</StyledHeaderMobile>
}

const StyledHeaderMobile = styled.div`
  position: sticky;
  top: 0px;
  left: 0px;
  width: 100%;
`
