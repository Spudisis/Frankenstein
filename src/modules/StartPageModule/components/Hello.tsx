import React from "react";
import { WrapperStart } from "../../../UI";
import { Link } from "react-router-dom";
import { Authorization } from "../../../routes";
export const Hello = () => {
  return (
    <WrapperStart>
      <h2>Create your custom app</h2>
      <h1>Frankenstein</h1>
      <Link to={Authorization}>Sign in</Link>
    </WrapperStart>
  );
};
