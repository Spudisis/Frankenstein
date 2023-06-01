import styled from 'styled-components'
import { type ChildrenProp } from '../../ChildrenProp'

interface ButtonHideProp {
  rotate: string
  clickF: () => void
  left?: string
  right?: string
  onMouseDown?: any
  onMouseUp?: any
}

export const ButtonHide = ({
  children,
  rotate,
  clickF,
  left,
  right,
  onMouseDown,
  onMouseUp
}: ChildrenProp & ButtonHideProp) => {
  return (
    <ButtonHideStyled
      onClick={() => {
        clickF()
      }}
      rotate={rotate}
      left={left}
      right={right}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      {children}
    </ButtonHideStyled>
  )
}

export const ButtonHideStyled = styled.button<Omit<ButtonHideProp, 'clickF'>>`
  position: absolute;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0);

  color: var(--color-text);
  border: none;
  ${(props) => (props.left ? `left: ${props.left}` : '')};
  ${(props) => (props.right ? `right: ${props.right}` : '')};
  top: 50%;
  cursor: pointer;

  & > svg {
    font-size: 30px;
    transform: rotate(${(props) => props.rotate || '0deg'});
    transition: 0.3s ease;
    @media screen and (hover: hover) {
      fill: black;
    }
  }
`
