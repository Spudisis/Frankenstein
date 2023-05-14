import React from "react";
import { ConnectDropTarget, useDrag } from "react-dnd";
import { typeFH } from "../../domains/ApplicationTypes";

export type PropsDNDHook = {
  name: string;
  options: any;
  parent?: string | typeFH;
};
export type PropDrag = ConnectDropTarget;

export type TypeItemTypesDND = {};

export const ItemTypesDND = {
  Header: "Header",
  Footer: "Footer",
  Any: "any",
  Main: "Main",
  Button: "Button",
  PicturesHeader: "PicturesHeader",
  PicturesFooter: "PicturesFooter",
  Wrapper: "Wrapper"
};

export type DropDND = [any, PropDrag];

export const CustomDNDHook = ({ name, options, parent }: PropsDNDHook) => {
  const [collected, drag, dragPreview] = useDrag(() => ({
    type: name,
    item: { ...options, parent },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const isDragging = collected.isDragging;

  return { collected, isDragging, drag, dragPreview };
};
