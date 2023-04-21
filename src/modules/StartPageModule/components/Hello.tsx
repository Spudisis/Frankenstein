import React from "react";
import { WrapperStart } from "../../../UI";
import { Link } from "react-router-dom";
import { Authorization } from "../../../routes/urlsPages";
import { Trans } from "react-i18next";
export const Hello = () => {
  return (
    <WrapperStart>
      <h2>
        <Trans i18nKey="helloPage.title">Create your custom app</Trans>
      </h2>

      <h1>Frankenstein</h1>
      <Link to={Authorization}>
        <Trans i18nKey="helloPage.buttonName">Sign in</Trans>
      </Link>
    </WrapperStart>
  );
};
