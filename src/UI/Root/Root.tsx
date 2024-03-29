import React from 'react'
import styled from 'styled-components'
import { type ChildrenProp } from '../ChildrenProp'

interface Prop {
  overflow: string
}

export const Root = ({ children, overflow }: ChildrenProp & Prop) => {
  return <RootStyled overflow={overflow}>{children}</RootStyled>
}

const RootStyled = styled.div<Prop>`
  height: calc(100vh - 80px);
  display: flex;
  position: relative;
  overflow: ${(props) => props.overflow || 'auto'};
`
