import { type WrapperStyles } from 'src/domains'
import styled, { css } from 'styled-components'

export const WrapperStyledDiv = styled.div.attrs(({ ref, onClick }) => ({
  ref,
  onClick
}))<WrapperStyles>`
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  border: ${(props) => props.border || 'none'};
  outline: none;
  border-radius: ${(props) => props.borderRadius || '5px'};
  color: ${(props) => props.color || 'black'};
  background-color: ${(props) => props.backgroundColor || 'white'};
  padding: ${(props) => props.padding || '2px'};
  margin: ${(props) => props.margin || '0px'};
  display: ${(props) => props.display || 'block'};
  ${({ display }) =>
    display === 'flex'
      ? css`
          justify-content: ${(props: WrapperStyles) =>
            props.justifyContent || ''};
          align-items: ${(props: WrapperStyles) => props.alignItems || ''};
          flex-direction: ${(props: WrapperStyles) =>
            props.flexDirection || 'row'};
        `
      : display === 'grid'
      ? css`
          grid-template-columns: ${(props: WrapperStyles) =>
            props.gridTemplateColumns
              ? `repeat(${props.gridTemplateColumns}, 1fr)`
              : 'repeat(1, 1fr)'};
          grid-column-gap: ${(props: WrapperStyles) =>
            // 2-5
            props.gridColumnGap || '0px'};
          grid-row-gap: ${(props: WrapperStyles) =>
            // 2-5
            props.gridRowGap || '0px'};
        `
      : ''}
`
