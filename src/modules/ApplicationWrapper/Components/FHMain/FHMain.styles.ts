import styled, { css } from 'styled-components'
import { type Option } from 'src/domains'
export const HFStyles = styled.div<any>`
  height: ${(props) => (props.height ? props.height : '150px')};
  border: ${(props) => props.border || 'none'};
  overflow: hidden;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'yellow'};
  display: ${(props) => props.display || 'block'};
  ${({ display }) =>
    display === 'flex'
      ? css`
          justify-content: ${(props: Option) => props.justifyContent || ''};
          align-items: ${(props: Option) => props.alignItems || ''};
          flex-direction: ${(props: Option) => props.flexDirection || 'row'};
        `
      : display === 'grid'
      ? css`
          grid-template-columns: ${(props: Option) =>
            props.gridTemplateColumns
              ? `repeat(${props.gridTemplateColumns}, 1fr)`
              : 'repeat(1, 1fr)'};
          grid-column-gap: ${(props: Option) =>
            // 2-5
            props.gridColumnGap || '0px'};
          grid-row-gap: ${(props: Option) =>
            // 2-5
            props.gridRowGap || '0px'};
        `
      : ''}
`

export const StyledFooter = styled(HFStyles)`
  border-radius: 0px 0px 25px 25px;
`
export const HeaderConstructor = styled(HFStyles)`
  border-radius: 25px 25px 0px 0px;
`
