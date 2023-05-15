import React from "react";
import { WrapperFBType } from "./WrapperDoubleGrid.types";
import { Wrapper } from "./WrapperDoubleGrid.styles";

export const WrapperDoubleGrid = ({ children }: WrapperFBType) => {
  return <Wrapper>{children}</Wrapper>;
};
