import React from "react";
import { useDrag } from "react-dnd";

import { PropsDNDHook } from "./CustomDNDHook.types";
import { ItemTypesDNDPictures } from "src/constants";

export const CreateMasItemTypesDND = () => {
  const MasType: string[] = [];
  for (const key in ItemTypesDNDPictures) {
    const value =
      ItemTypesDNDPictures[key as keyof typeof ItemTypesDNDPictures];
    MasType.push(value);
  }
  return MasType;
};

export const CustomDNDHook = ({
  name,
  options,
  parent,
  deleteItemFunc,
}: PropsDNDHook) => {
  const [collected, drag, dragPreview] = useDrag(() => ({
    type: name,
    item: { ...options, parent, deleteItemFunc },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const isDragging = collected.isDragging;

  return { collected, isDragging, drag, dragPreview };
};
