import React from "react";
import { InputStyles, PropsInput } from "../Options.types";
import { Input, Label, Summary, Wrapper } from "./CustomDetails.styles";
import { MouseEvent } from "react";
import { InputDisplayProps } from "./CustomDetails.types";
export const CustomDetails = ({
  children,
}: InputDisplayProps) => {
  const [openStatus, setOpenStatus] = React.useState(true);

  const onToggle = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setOpenStatus(!openStatus);
  };
  return (
    <details open={openStatus}>
      <Summary open={openStatus} onClick={(e) => onToggle(e)}>
        Расположение элементов
      </Summary>
      <Wrapper>
        {children}
      </Wrapper>
    </details>
  );
};
