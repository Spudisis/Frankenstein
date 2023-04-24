import styled from "styled-components";

export const ButtonMenu = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: none;
  color: white;
  font-size: 34px;
  transition: 0.3s ease all;
  cursor: pointer;
  @media (hover: hover) {
    &:hover {
      color: gray;
    }
  }
`;

export const Modal = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  background-color: #2c2c2c;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WrapperLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 20px;
`;

export const ButtonClose = styled.div`
  position: absolute;
  right: 30px;
  top: 30px;
`;
