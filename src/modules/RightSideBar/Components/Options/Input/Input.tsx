import React from "react";

import { HeaderOptionsInput } from "src/UI";
import { InputStyles, PropsInput } from "../Options.types";

export const Input = ({
  value,
  onChange,
  label,
  typeInput,
  property
}: InputStyles &
  PropsInput<
    | "height"
    | "margin"
    | "width"
    | "name"
    | "padding"
    | "borderRadius"
    | "nameModule"
  >) => {
  return (
    <HeaderOptionsInput>
      <label>{label}</label>
      <input
        type={typeInput}
        value={value[property]}
        onChange={e => {
          // const number = e.target.value.replace(/[^0-9]/g, "");

          onChange(e.target.value, property);
        }}
      />
    </HeaderOptionsInput>
  );
};
