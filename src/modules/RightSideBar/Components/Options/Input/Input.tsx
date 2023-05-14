import React from "react";
import { OutputHook } from "src/components/CustomHook";
import { HeaderOptionsInput } from "src/UI";

type PropsInput = {
  label: string;
  typeInput: string;
};

export const Input = React.memo(
  ({ input, label, typeInput }: { input: OutputHook } & PropsInput) => {
    return (
      <HeaderOptionsInput>
        <label>{label}</label>
        <input type={typeInput} {...input} />
      </HeaderOptionsInput>
    );
  }
);
