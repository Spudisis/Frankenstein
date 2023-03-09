import React from "react";
import styled, { keyframes } from "styled-components";
import { ChildrenProp } from "../ChildrenProp";

export const WrapperStart = ({ children }: ChildrenProp) => {
  return <WrapperStartPage>{children}</WrapperStartPage>;
};
const breatheAnimationButton = keyframes`
  0% {  opacity: 0.6; transform: translate(30px, 20px); }
  100% {  opacity: 1; }
`;
const breatheAnimationText = keyframes`
  0% {  opacity: 0.6; transform: translate(-30px, -20px); }
  100% {  opacity: 1; }
`;
const WrapperStartPage = styled.div`
  display: flex;
  height: 100vh;

  flex-direction: column;
  justify-content: center;
  color: white;
  align-items: center;
  z-index: 100;
  position: relative;
  & > h2,
  h1 {
    animation-name: ${breatheAnimationText};
    animation-duration: 1s;
  }
  & > a {
    animation-name: ${breatheAnimationButton};
    animation-duration: 1s;
  }
  h2 {
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
  }
  h1 {
    font-weight: 700;
    font-size: 96px;
    line-height: 116px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border: none;
    color: white;
    margin-top: 27px;
    font-weight: 500;
    font-size: 36px;
    line-height: 44px;

    background: var(--color-bgc-button-active);
    border-radius: var(--br-button);
    width: 330px;
    height: 94px;
    cursor: pointer;
    transition: 0.3s ease;
    @media screen and (hover: hover) {
      &:hover {
        background-color: var(--color-bgc-button-hover);
      }
    }
  }
`;
