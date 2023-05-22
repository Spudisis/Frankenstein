import React from "react";

export type OutputHook = {
  value: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const CustomHook = <_, T>(initialValue: any): OutputHook => {
  const [value, setValue] = React.useState(initialValue);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return { value, onChange };
};
