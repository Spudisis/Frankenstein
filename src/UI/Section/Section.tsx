import React from "react";
import styled from "styled-components";
import { ChildrenProp } from "../ChildrenProp";

export const Section = ({ children }: ChildrenProp) => {
  return <SectionStyled>{children}</SectionStyled>;
};

const SectionStyled = styled.div`
  height: 100%;
`;
