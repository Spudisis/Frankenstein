import React from "react";
import { ButtonHide } from "../../UI";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

type HideSideBar = {
  changeVisible: () => void;
  left?: string;
  right?: string;
  deg: string;
};

export const ButtonHideSideBar = ({ changeVisible, left, right, deg }: HideSideBar) => {
  const handleClick = () => {
    changeVisible();
  };
  return (
    <ButtonHide clickF={handleClick} rotate={deg} left={left} right={right}>
      <FontAwesomeIcon icon={faArrowRight} />
    </ButtonHide>
  );
};
