import React from 'react'
import styled, { keyframes } from 'styled-components'
import { type ChildrenProp } from '../ChildrenProp'

type PropSideBar = ChildrenProp & {
  left?: string
  right?: string
  top?: string
  bottom?: string
  width?: string
}

export const SideBar = ({ children, left, right, top, bottom, width }: PropSideBar) => {
  return (
    <SideBarStyled left={left} right={right} top={top} bottom={bottom} width={width}>
      {children}
    </SideBarStyled>
  )
}

type SideBarStyledProp = Omit<PropSideBar, 'children'>

const SideBarStyled = styled.div<SideBarStyledProp>`
  width: ${(props) => props.width || '240px'};

  position: relative;
  background-color: var(--color-bgc-sidebar);
  height: 100%;
  transition: 0.3s ease all;

  flex: ${(props) => (props.width ? '0 0 ' + props.width : '0 0 240px')};
  border: 1px solid #3e3d3d;
`
