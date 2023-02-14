import React from "react";
import { ChildrenProp } from "../ChildrenProp";
import styled from "styled-components";
export type ParamsScreen = {
  margin?: string;
};

type ScreenStyleProp = ChildrenProp & ParamsScreen;

export const ScreenStyle = ({ children, margin }: ScreenStyleProp) => {
  return (
    <ScreenStyled margin={margin}>
      <div>{children}</div>
    </ScreenStyled>
  );
};

const ScreenStyled = styled.div<ParamsScreen>`
  width: 360px;
  height: 660px;

  background-color: black;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  margin: ${(props) => (props.margin ? "0px " + props.margin : "0px")};

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 25px;
    background-color: white;
    width: calc(100% - 30px);
    height: calc(100% - 30px);
  }
`;
