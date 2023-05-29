import React from "react";
import styled from "styled-components";
import { SectionEnum } from "../../domains/ApplicationTypes";
import { ChildrenProp } from "../ChildrenProp";
interface ButtonProp {
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  paddingLeft?: string;
  fontSize?: string;
  active?: boolean;
  background?: string;
  left?: boolean;
  hover?: boolean;
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
  left,
  changeProp,
  children,
  active,
  background,
  hover = true,
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
      background={background}
      left={left}
      hover={hover}
      onClick={changeProp && (() => handleClick())}
    >
      {name}
      {children}
    </ButtonStyled>
  );
};

type ButtonStyledT = Omit<ButtonProp, "name">;

const ButtonStyled = styled.button<ButtonStyledT>`
  color: var(--color-text);
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  text-overflow: clip;

  outline: none;
  border: #3e3d3d;
  white-space: nowrap;
  overflow: hidden;
  background-color: ${(props) => props.background || "black"};
  box-sizing: content-box;
  padding: ${(props) => props.padding || "5px"};
  padding-left: ${(props) => props.paddingLeft || "auto"};
  margin: ${(props) => props.margin || "0px"};
  cursor: pointer;
  font-size: ${(props) => props.fontSize || "18px"};
  ${(props) => (props.left ? `display:flex; justify-content:flex-start;` : "")}
  ${(props) =>
    props.active
      ? `background-color: var(--color-bgc-button-active);
          border-radius:0px;
          margin:0px;
          color:white; `
      : ""}

    @media screen and (hover: hover) {
    ${(props) =>
      props.hover
        ? `&:hover {
      background-color: var(--color-bgc-button-active);  box-sizing: border-box;`
        : ""}
  }
`;
