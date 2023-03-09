import styled from "styled-components";

export const ErrorLabel = styled.label`
  color: red;
  bottom: -12px;
  position: absolute;
  left: 0px;
  @media screen and (max-width: 500px) {
    bottom: -15px;

    font-size: 14px;
  }
`;
