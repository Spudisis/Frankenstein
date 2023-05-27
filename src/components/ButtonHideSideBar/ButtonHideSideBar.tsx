import React from "react";
import { ButtonHide } from "../../UI";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Moved from "./Moved.svg";
type HideSideBar = {
  changeVisible: () => void;
  left?: string;
  right?: string;
  deg: string;
  createTemplate?: boolean;
  hide?: boolean;
};

export const ButtonHideSideBar = ({
  changeVisible,
  left,
  right,
  deg,
  hide = false,
  createTemplate = false,
}: HideSideBar) => {
  const handleClick = () => {
    changeVisible();
  };

  return (
    <ButtonHide
      clickF={handleClick}
      rotate={deg}
      left={left}
      right={right}
      createTemplate={createTemplate}
      hide={hide}
    >
      <svg
        width="18"
        height="95"
        viewBox="0 0 18 95"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="path-1-inside-1_5_43" fill="white">
          <path d="M0 0C9.94112 0 18 8.05888 18 18V77C18 86.9411 9.94112 95 0 95V0Z" />
        </mask>
        <path
          d="M0 0C9.94112 0 18 8.05888 18 18V77C18 86.9411 9.94112 95 0 95V0Z"
          fill="#2C2C2C"
        />
        <path
          d="M0 -1C10.4934 -1 19 7.50659 19 18H17C17 8.61116 9.38884 1 0 1V-1ZM19 77C19 87.4934 10.4934 96 0 96V94C9.38884 94 17 86.3888 17 77H19ZM0 95V0V95ZM0 -1C10.4934 -1 19 7.50659 19 18V77C19 87.4934 10.4934 96 0 96V94C9.38884 94 17 86.3888 17 77V18C17 8.61116 9.38884 1 0 1V-1Z"
          fill="#3E3D3D"
          mask="url(#path-1-inside-1_5_43)"
        />
      </svg>
    </ButtonHide>
  );
};
