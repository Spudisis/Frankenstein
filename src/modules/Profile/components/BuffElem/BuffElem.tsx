import React from "react";
import { TypeBuff } from "./BuffElem.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Grid, IconSpan } from "./BuffElem.styles";
export const BuffElem = ({ name, access }: TypeBuff) => {
  return (
    <Grid>
      <IconSpan access={access}>
        {access ? (
          <FontAwesomeIcon icon={faCheck} />
        ) : (
          <FontAwesomeIcon icon={faXmark} />
        )}
      </IconSpan>
      {name}
    </Grid>
  );
};
