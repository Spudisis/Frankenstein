import styled from "styled-components";

export const ApplicationWrapperStyled = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    display: grid;
  }
`;

export const ApplicationBuild = styled.div`
  display: flex;
  min-height: 100%;
  align-items: center;
`;
