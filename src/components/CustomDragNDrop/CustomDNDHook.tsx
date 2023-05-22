import React from "react";
import { ConnectDropTarget, useDrag } from "react-dnd";
import { typeFH } from "../../domains/ApplicationTypes";
import { CreateId } from "../CreateId/CreateId";

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
  PicturesButton: "PicturesButton",
  PicturesWrapper: "PicturesWrapper",
  Wrapper: "Wrapper",
  PicturesText: "PicturesText"
};

export type DropDND = [any, PropDrag];

export const CustomDNDHook = ({ name, options, parent }: PropsDNDHook) => {
  // console.log(options);

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
