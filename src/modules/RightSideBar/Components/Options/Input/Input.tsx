import React, { ChangeEvent } from "react";

import { HeaderOptionsInput } from "src/UI";
import { InputStyles, PropsInput } from "../Options.types";

export const Input = <T,>({
  value,
  onChange,
  label,
  typeInput,
  property,
}: InputStyles<T> & PropsInput<T>) => {
  return (
    <HeaderOptionsInput>
      <label>{label}</label>
      <input
        type={typeInput}
        value={value[property] as string}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          onChange(e.target.value as T[keyof T], property);
        }}
      />
    </HeaderOptionsInput>
  );
};
