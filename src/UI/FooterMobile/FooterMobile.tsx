import React from 'react'
import styled from 'styled-components'
import { type ChildrenProp } from '../ChildrenProp'
import { type ConnectDropTarget } from 'react-dnd'

export const FooterMobile = ({ children, refDrag }: ChildrenProp & { refDrag: ConnectDropTarget }) => {
  return <StyledFooter ref={refDrag}>{children}</StyledFooter>
}
const StyledFooter = styled.div`
  float: bottom;
  bottom: 0px;
  left: 0px;

  width: 100%;
`
