import React from "react";
import { InputStyles, PropsInput } from "../Options.types";
import { Input, Label, Summary, Wrapper } from "./InputDisplay.styles";
import { MouseEvent } from "react";
export const InputDisplay = <T,>({
  value,
  onChange,
  property,
}: InputStyles<T> & Omit<PropsInput<T>, "label">) => {
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
        <Label chosen={value[property] === "flex"}>
          flex
          <Input
            type="radio"
            name="typeBlock"
            value={"flex"}
            checked={value[property] === "flex"}
            onChange={(e) => onChange(e.target.value as T[keyof T], property)}
          />
        </Label>
        <Label chosen={value[property] === "grid"}>
          grid
          <Input
            type="radio"
            name="typeBlock"
            value={"grid"}
            checked={value[property] === "grid"}
            onChange={(e) => onChange(e.target.value as T[keyof T], property)}
          />
        </Label>
      </Wrapper>
    </details>
  );
};
