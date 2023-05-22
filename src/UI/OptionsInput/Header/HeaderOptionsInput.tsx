import React from "react";
import styled from "styled-components";
import { ChildrenProp } from "../../ChildrenProp";

export const HeaderOptionsInput = ({ children }: ChildrenProp) => {
  return <StyledOptionsInputs>{children}</StyledOptionsInputs>;
};

const StyledOptionsInputs = styled.div`
  color: white;
  display: grid;
  padding: 5px;
  grid-template-columns: repeat(2, 1fr);
  font-size: 18px;
  border-bottom: 1px solid gray;
  position: relative;
  input {
    color: white;
    background-color: inherit;
    width: 200px;
  }
`;
