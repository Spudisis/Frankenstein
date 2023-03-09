import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { EmptyButton, SignWithStyled } from "../../UI";

export const SignWith = () => {
  return (
    <SignWithStyled>
      <h4>Войти через...</h4>
      <div>
        <EmptyButton>
          <FontAwesomeIcon icon={faGoogle} />
        </EmptyButton>
        <EmptyButton>
          <FontAwesomeIcon icon={faGoogle} />
        </EmptyButton>
        <EmptyButton>
          <FontAwesomeIcon icon={faGoogle} />
        </EmptyButton>
        <EmptyButton>
          <FontAwesomeIcon icon={faGoogle} />
        </EmptyButton>
      </div>
    </SignWithStyled>
  );
};
