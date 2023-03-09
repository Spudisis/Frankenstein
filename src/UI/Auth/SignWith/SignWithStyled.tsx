import React from "react";
import styled from "styled-components";
import { ChildrenProp } from "../../ChildrenProp";

export const SignWithStyled = ({ children }: ChildrenProp) => {
  return <StyledSignWith>{children}</StyledSignWith>;
};
const StyledSignWith = styled.div`
  color: white;
  margin: 11px 0;
  h4 {
    margin: 6px 0;
    font-size: 20px;
    @media screen and (max-width: 1800px) {
      font-size: 18px;
    }
    @media screen and (max-width: 500px) {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 1800px) {
    margin: 8px 0;
  }
  @media screen and (max-width: 500px) {
    margin: 6px 0;
  }
`;
