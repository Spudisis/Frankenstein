import React from "react";
import styled from "styled-components";
import { ChildrenProp } from "../ChildrenProp";

export const Bgc = ({ children }: ChildrenProp) => {
  return <BgcStyled>{children}</BgcStyled>;
};

const BgcStyled = styled.div`
  background-color: var(--color-bgc-helloPage);
  min-height: 100vh;
`;
