import styled from 'styled-components'

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ModalContent = styled.div`
  width: 400px;
  height: 300px;
  background-color: #222;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  @media screen and (max-width: 420px) {
    width: 100%;
    border-radius: 0px;
  }
`

export const Info = styled.h2`
  color: #fff;
  text-align: center;
`

export const ButtonClose = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  color: white;
  background-color: rgba(0, 0, 0, 0);
  border: 0px;
  font-size: 30px;
  cursor: pointer;
  transition: 0.3s ease all;
  @media (hover: hover) {
    &:hover {
      color: gray;
    }
  }
`
