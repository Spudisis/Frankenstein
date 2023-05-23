import React from "react";
import { Module } from "src/domains";

export const FindIndexDecompose = ({ modules }: any) => {
  const FindIndex = React.useCallback(
    (id: string) => {
      if (!modules) {
        throw new Error("Нет скрина или модуля");
      }

      const card = modules.filter(
        (c: Module | undefined) => typeof c !== "undefined" && c.id === id
      )[0];
      if (card) {
        return {
          card,
          index: modules.indexOf(card),
          id,
        };
      }

      return null;
    },
    [modules]
  );
  return { FindIndex };
};
