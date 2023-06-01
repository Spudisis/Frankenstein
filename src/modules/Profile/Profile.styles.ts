import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 400px;
  justify-content: space-between;
  grid-column-gap: 20px;
  @media screen and (max-width: 840px) {
    grid-row-gap: 30px;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`
export const SectionProfile = styled.section`
  margin: 10px 0px 30px;
`
