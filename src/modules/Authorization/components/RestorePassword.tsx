import React from "react";
import { Link } from "react-router-dom";
import { RestorePassword as RPass } from "../../../routes/index";
import { StyledRestorePass } from "../../../UI";

export const RestorePassword = () => {
  return (
    <StyledRestorePass>
      <Link to={RPass}>Забыли пароль?</Link>
    </StyledRestorePass>
  );
};
