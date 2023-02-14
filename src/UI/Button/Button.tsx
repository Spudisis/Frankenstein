import React from "react";
import styled from "styled-components";
import { SectionEnum } from "../../store/Application";
import { ChildrenProp } from "../ChildrenProp";
interface ButtonProp {
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  paddingLeft?: string;
  fontSize?: string;
  active?: boolean;
}
type paramsButtonsProp<T> = {
  name: string;
  prop?: T;
  changeProp?: (t: T) => void;
};

export const Button = <_, T>({
  name,
  width,
  height,
  padding,
  margin,
  prop,
  fontSize,
  paddingLeft,
  changeProp,
  children,
  active,
}: ButtonProp & paramsButtonsProp<T> & Partial<ChildrenProp>) => {
  const handleClick = () => {
    console.log(prop, typeof changeProp === "function");
    if (typeof prop !== "undefined" && typeof changeProp === "function") {
      changeProp(prop);
    }
  };
  return (
    <ButtonStyled
      width={width}
      height={height}
      padding={padding}
      margin={margin}
      fontSize={fontSize}
      paddingLeft={paddingLeft}
      active={active}
      onClick={changeProp && (() => handleClick())}
    >
      {name}
      {children}
    </ButtonStyled>
  );
};

type ButtonStyledT = Omit<ButtonProp, "name">;

const ButtonStyled = styled.button<ButtonStyledT>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  text-overflow: clip;
  border-radius: 5px;
  outline: none;
  border: var(--color-border);
  white-space: nowrap;
  overflow: hidden;
  background-color: var(--color-bg);
  box-sizing: content-box;
  padding: ${(props) => props.padding || "5px"};
  padding-left: ${(props) => props.paddingLeft || "auto"};
  margin: ${(props) => props.margin || "0px"};
  cursor: pointer;
  font-size: ${(props) => props.fontSize || "18px"};
  ${(props) =>
    props.active
      ? `background-color: var(--color-bgc-button-active); 
          border-radius:0px; 
          margin:0px; 
          color:white; `
      : ""}
  @media screen and (hover: hover) {
    &:hover {
      color: red;
    }
  }
`;
