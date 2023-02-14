import React from "react";
import styled from "styled-components";
import { ChildrenProp } from "../../ChildrenProp";

export const HeaderOptionsInput = ({ children }: ChildrenProp) => {
  return <StyledOptionsInputs>{children}</StyledOptionsInputs>;
};

const StyledOptionsInputs = styled.div`
  display: grid;
  padding: 5px;
  grid-template-columns: repeat(2, 1fr);
  font-size: 18px;
  border-bottom: 1px solid black;
  input {
    width: 200px;
  }
  @media screen and (hover: hover) {
    input:hover {
      color: #5b5959;
      border-right: 3px solid black;
    }
  }
`;
