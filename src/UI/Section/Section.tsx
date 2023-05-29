import React from "react";
import styled from "styled-components";
import { ChildrenProp } from "../ChildrenProp";

export const Section = ({ children }: ChildrenProp) => {
  return <SectionStyled>{children}</SectionStyled>;
};

const SectionStyled = styled.div`
  height: 100%;
  position: relative;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: #2c2c2c;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #171717;
    border-radius: 10px;

    box-shadow: inset 0 0 6px rgb(0, 0, 0);
  }
`;
