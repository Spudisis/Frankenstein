import React from "react";
import styled from "styled-components";
import { ChildrenProp } from "../../ChildrenProp";

export type ContentProp = {
  overflow: string;
  refDND?: any;
};

export const ContentWrapper = ({ children, overflow, refDND }: ChildrenProp & ContentProp) => {
  return (
    <ContentStyled overflow={overflow} ref={refDND}>
      {children}
    </ContentStyled>
  );
};

const ContentStyled = styled.div<ContentProp>`
  overflow-x: ${(props) => (props.overflow ? props.overflow : "auto")};
  display: flex;
  height: 100%;

  flex-direction: column;
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    background-color: #ececec;
  }
  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgb(0, 0, 0);
  }
`;
