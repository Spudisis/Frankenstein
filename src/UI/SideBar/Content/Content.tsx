import React from 'react'
import styled from 'styled-components'
import { type ChildrenProp } from '../../ChildrenProp'

export interface ContentProp {
  overflow: string
  refDND?: any
  bgcColor?: string
}

export const ContentWrapper = ({ children, overflow, refDND, bgcColor }: ChildrenProp & ContentProp) => {
  return (
    <ContentStyled overflow={overflow} ref={refDND} bgcColor={bgcColor}>
      {children}
    </ContentStyled>
  )
}

const ContentStyled = styled.div<ContentProp>`
  overflow-x: ${(props) => (props.overflow ? props.overflow : 'auto')};
  display: flex;
  height: 100%;
  background-color: ${(props) => props.bgcColor || 'inherit'};
  flex-direction: column;
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    background-color: #ececec;
  }
  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgb(0, 0, 0);
  }
`
