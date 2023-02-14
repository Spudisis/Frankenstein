import React from "react";
import styled from "styled-components";
import { ChildrenProp } from "../ChildrenProp";

export const MobileMain = ({ children }: ChildrenProp) => {
  return <MobileMainStyled>{children}</MobileMainStyled>;
};

const MobileMainStyled = styled.div`
  overflow-x: auto;

  padding: 5px;
`;
