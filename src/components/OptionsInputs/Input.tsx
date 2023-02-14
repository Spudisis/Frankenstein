import React from "react";
import { OutputHook } from "../CustomHook";
import { HeaderOptionsInput } from "../../UI";

type PropsInput = {
  label: string;
  typeInput: string;
};

export const Input = React.memo(({ input, label, typeInput }: { input: OutputHook } & PropsInput) => {
  return (
    <HeaderOptionsInput>
      <label>{label}</label>
      <input type={typeInput} {...input} />
    </HeaderOptionsInput>
  );
});
