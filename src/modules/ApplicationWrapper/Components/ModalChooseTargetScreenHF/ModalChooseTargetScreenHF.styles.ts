import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.3);
`

export const ModalStyled = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  border-radius: 20px;
  background-color: #2c2c2c;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  color: white;
`
export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
