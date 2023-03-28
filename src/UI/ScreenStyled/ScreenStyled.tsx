import React from "react";
import { ChildrenProp } from "../ChildrenProp";
import styled from "styled-components";
export type ParamsScreen = {
  margin?: string;
  NewScreen?: boolean;
};

type ScreenStyleProp = ChildrenProp & ParamsScreen;

export const ScreenStyle = ({
  children,
  margin,
  NewScreen,
}: ScreenStyleProp) => {
  return (
    <ScreenStyled margin={margin}>
      <Contour>
        <Border NewScreen={NewScreen}>{children}</Border>
      </Contour>
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
`;

const Contour = styled.div`
  width: calc(100% - 11px);
  height: calc(100% - 11px);
  border-radius: 25px;
  background: #111111;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 3px 1px white;
`;
const Border = styled.div<ParamsScreen>`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 25px;
  background-color: ${(props) => (props.NewScreen ? "#1C1B1B" : "white")};

  width: calc(100% - 8px);
  height: calc(100% - 8px);
`;
