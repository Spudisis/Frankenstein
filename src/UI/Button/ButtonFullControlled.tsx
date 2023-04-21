import React from "react";
import styled from "styled-components";
import { Module } from "../../store/types/ApplicationTypes";

export const StyledButtonFullControlled = styled.button<any>`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  border: ${(props) => props.border || "1px solid black"};
  outline: none;
  border-radius: ${(props) => props.borderRadius || "5px"};
  color: ${(props) => props.color || "black"};
  background-color: ${(props) => props.backgroundColor || "white"};
  padding: ${(props) => props.padding || "2px"};
  margin: ${(props) => props.margin || "0px"};
`;
