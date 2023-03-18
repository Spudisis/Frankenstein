import { useTranslation } from "react-i18next";
import React from "react";
import styled from "styled-components";

import rusFlag from "./assets/russianFlag/Flag_of_Russia.svg";
import USA from "./assets/usaFlag/Flag_of_the_United_States.svg";
type A = {};
export const SelectLanguage = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);

  const languages = [
    { id: 1, lang: "ru", name: "RUS" },
    { id: 2, lang: "en", name: "ENG" },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <Wrapper onClick={() => setIsOpen(!isOpen)} tabIndex={0}>
        {!isOpen
          ? languages.map((elem, index) => {
              if (i18n.language.slice(0, 2) === elem.lang) {
                return (
                  <Li
                    tabIndex={-index}
                    key={elem.id}
                    onClick={() => changeLanguage(elem.lang)}
                  >
                    <img src={elem.lang === "ru" ? rusFlag : USA} alt="" />
                    {elem.name}
                  </Li>
                );
              }
            })
          : languages.map((elem, index) => {
              return (
                <Li
                  tabIndex={-index}
                  key={elem.id}
                  onClick={() => changeLanguage(elem.lang)}
                >
                  <img src={elem.lang === "ru" ? rusFlag : USA} alt="" />
                  {elem.name}
                </Li>
              );
            })}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.ul`
  width: 120px;
  min-height: 40px;
  position: absolute;
  margin: 0px 10px;
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

const Li = styled.li`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  img {
    width: 39px;
    height: 21px;
  }
`;
