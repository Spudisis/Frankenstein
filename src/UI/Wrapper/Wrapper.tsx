import styled from 'styled-components'
import { type ChildrenProp } from '../ChildrenProp'

type WrapperProp = ChildrenProp & {
  justify?: string
  height?: string
  borderBottom?: string
  direction?: string
  position?: string
  overflow?: string
  padding?: string
  background?: string
}

export const Wrapper = ({
  children,
  justify,
  height,
  borderBottom,
  direction,
  position,
  overflow,
  padding,
  background
}: WrapperProp) => {
  return (
    <WrapperStyled
      justify={justify}
      height={height}
      borderBottom={borderBottom}
      direction={direction}
      position={position}
      overflow={overflow}
      padding={padding}
      background={background}
    >
      {children}
    </WrapperStyled>
  )
}

type WrapperStyledProp = Omit<WrapperProp, 'children'>

const WrapperStyled = styled.div<WrapperStyledProp>`
  padding: ${(props) => props.padding || '0px 10px'};
  display: flex;
  justify-content: ${(props) => props.justify || 'space-between'};
  width: 100%;
  flex-direction: ${(props) => props.direction || 'row'};
  border-bottom: ${(props) => props.borderBottom || 'none'};
  height: ${(props) => props.height || 'inherit'};
  align-items: center;
  max-height: 100%;
  background: ${(props) => props.background || 'inherit'};
  overflow: ${(props) => props.overflow || 'none'};
  position: ${(props) => props.position || 'static'};
`
