import React from "react";
import styled from "styled-components";

type props = {
  text: string;
  fontSize?: number;
  marginT?: number;
  onClick?: () => void;
};

export const DefaultButton = ({ text, fontSize, marginT, onClick }: props) => {
  return (
    <StyledButton
      fontSize={fontSize}
      marginT={marginT}
      onClick={() => onClick && onClick()}
    >
      {text}
    </StyledButton>
  );
};
const StyledButton = styled.button<Omit<props, "text">>`
  background-color: var(--color-bgc-button-active);
  border: 1px solid var(--color-bgc-button-active);
  font-size: ${(props) => props.fontSize + "px" || "16px"};
  border-radius: var(--br-button);
  padding: 10px 0px;
  color: var(--color-button);
  display: flex;
  cursor: pointer;
  align-items: center;
  text-align: center;
  justify-content: center;
  transition: 0.2s ease;
  ${(props) => (props.marginT ? "margin-top: " + props.marginT + "px" : "")};
  &:hover {
    background-color: var(--color-bgc-button-hover);
  }
  @media screen and (max-width: 1800px) {
    padding: 5px 0;
    font-size: ${(props) =>
      props.fontSize ? props.fontSize * 0.8 + "px" : "14px"};
  }
  @media screen and (max-width: 500px) {
    font-size: ${(props) =>
      props.fontSize ? props.fontSize * 0.7 + "px" : "14px"};
    ${(props) =>
      props.marginT ? "margin-top: " + (props.marginT - 40) + "px" : ""};
  }
`;
