import styled from 'styled-components'

export const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  @media screen and (max-width: 1170px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 300px);
  }
  @media screen and (max-width: 650px) {
    grid-template-columns: repeat(1, 400px);
  }
  @media screen and (max-width: 440px) {
    grid-template-columns: repeat(1, 290px);
  }
`

export const Root = styled.div`
  @media screen and (max-width: 1170px) {
    margin: 0px 10px;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const InfoProject = styled.p`
  color: white;
  font-size: 20px;
`
