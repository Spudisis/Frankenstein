import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  overflow: hidden;
  border-radius: 10px;
  @media screen and (max-width: 440px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
export const Image = styled.img<{ bgc: boolean }>`
  object-fit: contain;
  height: 100%;
  max-height: 250px;
  width: 100%;
  background-color: ${(props) => (props.bgc ? '#2c2c2c' : '')};
`
export const Information = styled.div`
  color: white;
  padding: 5px 5px 5px 15px;
  border-right: 1px solid #4b4b4b;
  border-top: 1px solid #4b4b4b;
  border-bottom: 1px solid #4b4b4b;
  border-radius: 0px 10px 10px 0px;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 440px) {
    border-top: 0px;
    border-radius: 0px 0px 10px 10px;
    border-left: 1px solid #4b4b4b;
  }
`

export const Str = styled.p`
  border-bottom: 1px solid #4b4b4b;
`
