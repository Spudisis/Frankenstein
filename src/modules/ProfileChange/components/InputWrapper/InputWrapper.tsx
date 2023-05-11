import React from "react";
import { InputT } from "./InputWrapper.types";
import { Wrapper } from "./InputWrapper.styles";

export const InputWrapper = ({ children }: InputT) => {
  return <Wrapper>{children}</Wrapper>;
};
