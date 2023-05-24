import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypesDND } from "src/components/CustomDragNDrop/CustomDNDHook";
import { DragHook } from "./customDragHook.types";

export const CustomDragHook = ({
  elem,
  parent,
  ParentParent,
  FindIndex,
  MoveCardFunc,
  typeDrag,
  deleteItemFunc,
}: DragHook) => {
  const find = FindIndex(elem.id, parent);
  const originalIndex = find ? find.index : -1;

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: typeDrag,
      item: {
        ...elem,
        parent,
        ParentParent,
        originalIndex,
        deleteItemFunc,
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const { id: droppedId, originalIndex } = item;

        const didDrop = monitor.didDrop();

        if (!didDrop) {
          console.log(droppedId, originalIndex);
          MoveCardFunc({
            draggedId: droppedId,
            originalIndex,
            parentButton: parent,
            ParentParent: ParentParent,
          });
        }
      },
    }),
    [parent, originalIndex, elem.id, MoveCardFunc, ParentParent]
  );
  return { isDragging, drag };
};
