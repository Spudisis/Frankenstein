import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypesDND } from "src/components/CustomDragNDrop/CustomDNDHook";
import { ScreenAddElemeny } from "src/domains";
import { CustomDropHF } from "./customDropHook.types";

export const CustomDropHook = ({changeModules, modules}:CustomDropHF) => {
  const [, drop] = useDrop(
    () => ({
      accept: [ItemTypesDND.PicturesButton, ItemTypesDND.PicturesText],
      drop: (item: ScreenAddElemeny) => {
        changeModules([...modules, item]);
      },
    }),
    []
  );
  return { drop };
};
