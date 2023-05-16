import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0px 5px;
`;

export const BgcModal = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalStyled = styled.div`
  width: 350px;
  height: 300px;
  color: white;
  background-color: var(--color-bgc-header);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  z-index: 1010;
`;

export const Content = styled.div`
  padding: 30px;
  width: 100%;
  height: 100%;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  user-select: none;
  line-height: 1.3;
  position: relative;
`;

export const InputDelete = styled.input`
  border-radius: 10px;
  outline: none;
  border: 0px;
  width: 100%;
  margin-bottom: 10px;
  padding: 0px 5px;
  &:disabled {
    color: gray;
  }
`;
export const Error = styled.p`
  font-size: 16px;
  color: red;
`;
export const CloseModalStyled = styled.button`
  position: absolute;
  right: 15px;
  top: 10px;
  font-size: 30px;
  color: red;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
  border: 0px;
`;
