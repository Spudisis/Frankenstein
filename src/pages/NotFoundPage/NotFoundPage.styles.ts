import styled from "styled-components";

export const StyledNotFound = styled.div`
  color: white;
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  @media screen and (max-width: 450px) {
    font-size: 26px;
  }
`;
