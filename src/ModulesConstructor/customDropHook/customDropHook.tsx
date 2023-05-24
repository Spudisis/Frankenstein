import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypesDND } from "src/components/CustomDragNDrop/CustomDNDHook";
import { ScreenAddElemeny, SubModules, Module } from "src/domains";
import { CustomDropHF } from "./customDropHook.types";
import { CreateId } from "src/components";

export const CustomDropHook = ({ newModuleDrop }: CustomDropHF) => {
  const [, drop] = useDrop(
    () => ({
      accept: [ItemTypesDND.PicturesButton, ItemTypesDND.PicturesText],
      drop: (item: ScreenAddElemeny) => {
        newModuleDrop({ ...item, id: CreateId() });
      },
    }),
    []
  );
  return { drop };
};
