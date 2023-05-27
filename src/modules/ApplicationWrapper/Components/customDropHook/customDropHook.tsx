import React from "react";
import { useDrop } from "react-dnd";
import { ScreenAddElemeny } from "src/domains";
import { DropHook } from "./customDropHook.types";
import { ItemTypesDND } from "src/constants";

export const CustomDropHook = ({
  dropFunc,
  MoveCardFunc,
  elem,
  FindIndex,
  ItemAccess,

}: DropHook) => {
  const access = [ItemTypesDND.Button, ItemTypesDND.Wrapper, ItemTypesDND.Text];

  if (ItemAccess) {
    access.push(...ItemAccess);
  }

  const [, drop] = useDrop(
    () => ({
      accept: access,
      drop: (item: ScreenAddElemeny) => {
        if (dropFunc) dropFunc(item);
      },
      hover(item: ScreenAddElemeny) {
        const draggedId = item.id;

        if (draggedId !== elem.id) {
          const find = FindIndex(elem.id);

          if (find) {
            const { index: overIndex } = find;
            MoveCardFunc({ draggedId, originalIndex: overIndex });
          }
        }
      },
    }),
    [FindIndex, MoveCardFunc]
  );
  return { drop };
};
