import React from "react";
import { BuffType } from "./PaymentBuff.types";
import { Grid } from "./PaymentBuff.styles";
import { Buff } from "./PaymentBuff.constant";

import { BuffElem } from "../BuffElem";
export const PaymentBuff = ({ tier }: BuffType) => {
  return (
    <Grid>
      {Buff.map((elem) => {
        if (elem.access.includes(tier))
          return <BuffElem name={elem.name} access={true} />;
        return <BuffElem name={elem.name} access={false} />;
      })}
    </Grid>
  );
};
