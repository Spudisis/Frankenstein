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
const BorderAnimation = keyframes`
  100% {
    transform: rotate(1turn);
  }
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
    @media screen and (max-width: 768px) {
      font-size: 32px;
    }
    @media screen and (max-width: 500px) {
      font-size: 26px;
    }
    @media screen and (max-width: 360px) {
      font-size: 22px;
      line-height: 24px;
    }
  }
  h1 {
    font-weight: 700;
    font-size: 96px;
    line-height: 116px;
    @media screen and (max-width: 768px) {
      line-height: 80px;
      font-size: 60px;
    }
    @media screen and (max-width: 500px) {
      line-height: 60px;
      font-size: 45px;
    }
  }

  a {
    display: flex;
    z-index: 0;
    align-items: center;
    justify-content: center;
    position: relative;
    outline: none;
    border: none;
    color: white;
    margin-top: 27px;
    font-weight: 500;
    font-size: 36px;
    line-height: 44px;
    overflow: hidden;
    background: var(--color-bgc-button-active);
    border-radius: var(--br-button);
    width: 330px;
    height: 94px;
    cursor: pointer;
    transition: 0.3s ease;
    @media screen and (max-width: 768px) {
      width: 260px;
      height: 70px;
    }
    @media screen and (max-width: 500px) {
      width: 230px;
      height: 60px;
      font-size: 28px;
    }
    @media screen and (hover: hover) {
      &,
      :hover::before,
      :hover::after {
        background-color: var(--color-bgc-button-hover);
      }
    }
    &::before {
      content: "";
      position: absolute;
      z-index: -2;
      left: -50%;
      top: -150%;
      width: 200%;
      height: 400%;
      background-color: var(--color-bgc-button-active);
      background-repeat: no-repeat;
      background-size: 50% 50%, 50% 50%;
      background-position: 0 0, 100% 0, 100% 100%, 0 100%;
      background-image: linear-gradient(white, var(--color-bgc-button-active));

      animation: ${BorderAnimation} 5s linear infinite;
      transition: 0.3s ease;
      @media screen and (hover: hover) {
        &:hover {
          background-color: var(--color-bgc-button-hover);
        }
      }
    }
    &::after {
      content: "";
      position: absolute;

      z-index: -1;
      left: 6px;
      top: 6px;
      width: calc(100% - 12px);
      height: calc(100% - 12px);
      background: var(--color-bgc-button-active);
      border-radius: 5px;
      transition: 0.3s ease;
    }
  }
`;
