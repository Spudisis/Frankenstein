import React from 'react'
import styled from 'styled-components'
import { ChildrenProp } from '../ChildrenProp'
import { type ConnectDropTarget } from 'react-dnd'

interface Props {
  top?: string
  bottom?: string
}

export const AbsoluteWrapperBlock = ({ top, bottom, refDrag }: Props & { refDrag: ConnectDropTarget }) => {
  return <Absolute top={top} bottom={bottom} ref={refDrag}></Absolute>
}

const Absolute = styled.div<Props>`
  position: absolute;
  width: 100%;
  height: 60px;
  z-index: 1010;
  ${(props) => (props.bottom ? 'bottom:' + props.bottom + ';' : '')};
  left: 0px;
  ${(props) => (props.top ? 'top:' + props.top + ';' : '')};
`
