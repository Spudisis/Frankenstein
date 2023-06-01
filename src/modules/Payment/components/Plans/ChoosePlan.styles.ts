import styled from 'styled-components'

export const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: 80%;
  grid-template-rows: repeat(3, 300px);
  grid-row-gap: 20px;
  margin-bottom: 20px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 700px;
    grid-template-rows: repeat(3, 400px);
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 500px;
  }
  @media screen and (max-width: 560px) {
    grid-template-columns: 300px;
    grid-template-rows: repeat(3, 400px);
  }
  @media screen and (max-width: 380px) {
    grid-template-rows: repeat(3, 500px);
  }
`

export const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
`

export const Head = styled.h4`
  text-align: center;
  font-size: 24px;
  border-bottom: 1px solid gray;
`
