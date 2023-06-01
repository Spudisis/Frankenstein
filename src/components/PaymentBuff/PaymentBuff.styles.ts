import styled from 'styled-components'

export const Grid = styled.div`
  margin: 10px 0px;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  @media screen and (max-width: 380px) {
    grid-template-columns: 1fr;
  }
`
