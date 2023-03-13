import i18next from "i18next";
import React from "react";
import styled from "styled-components";

import rusFlag from "./assets/russianFlag/Flag_of_Russia.svg";
export const SelectLanguage = () => {
    
  const [isOpen, setIsOpen] = React.useState(false);
  const locale = navigator.language;
  console.log(locale);
  React.useEffect(() => {
    setTimeout(() => {
      i18next.changeLanguage("ru");
    }, 500);
  }, []);
  return <Wrapper>index</Wrapper>;
};

const Wrapper = styled.button`
  width: 120px;
  height: 40px;
  position: absolute;
  right: 50px;
  top: 50px;
  color: var(--color-button);
  border-radius: 15px;
  outline: none;
  border: none;
  cursor: pointer;
  z-index: 1000;
  background-color: var(--color-bgc-button-active);
`;
