import React from "react";
import { FindIndexDecompose } from "../FindIndexDecompose";
import update from "immutability-helper";

export const MoveCardDecompose = ({ modules, changeModules }: any) => {
  const { FindIndex } = FindIndexDecompose({ modules });
  const MoveCardFunc = React.useCallback(
    ({
      draggedId,
      originalIndex,
    }: {
      draggedId: string;
      originalIndex: number;
    }) => {
      const cardNIndex = FindIndex(draggedId);

      if (cardNIndex) {
        const { card, index, id } = cardNIndex;

        const newModules = update(modules, {
          $splice: [
            [index, 1],
            [originalIndex, 0, card],
          ],
        });
        console.log(newModules);
        changeModules(newModules);
      }
      return null;
    },
    [FindIndex, modules]
  );
  return { MoveCardFunc };
};
