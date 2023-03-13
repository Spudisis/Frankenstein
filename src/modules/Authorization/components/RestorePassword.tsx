import React from "react";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";
import { RestorePassword as RPass } from "../../../routes/index";
import { StyledRestorePass } from "../../../UI";

export const RestorePassword = () => {
  return (
    <StyledRestorePass>
      <Link to={RPass}>
        <Trans i18nKey="Auth.ForgetPass">Forget Password?</Trans>
      </Link>
    </StyledRestorePass>
  );
};
