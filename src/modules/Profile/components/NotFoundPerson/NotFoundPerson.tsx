import React from "react";
import { StyledError } from "./NotFoundPerson.styles";

export const NotFoundPerson = () => {
  return (
    <StyledError>
      Произошла ошибка, возможно, пользователь не найден
    </StyledError>
  );
};
