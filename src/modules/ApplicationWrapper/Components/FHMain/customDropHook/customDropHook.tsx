import React from "react";
import { useDrop } from "react-dnd";
import { ScreenAddElemeny, SubModules, Module } from "src/domains";
import { CustomDropHF } from "./customDropHook.types";
import { CreateId } from "src/components";
import { ItemTypesDNDPictures } from "src/constants";

export const CustomDropHook = ({ newModuleDrop }: CustomDropHF) => {
  const [, drop] = useDrop(
    () => ({
      accept: [ItemTypesDNDPictures.PicturesButton, ItemTypesDNDPictures.PicturesText],
      drop: (item: ScreenAddElemeny) => {
        newModuleDrop({ ...item, id: CreateId() });
      },
    }),
    []
  );
  return { drop };
};
