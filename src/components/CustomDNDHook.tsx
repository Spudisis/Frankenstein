import React from "react";
import { useDrag } from "react-dnd";
import { typeFH } from "../store/Application";

export type PropsDNDHook = {
  name: string;
  options: any;
  parent?: string | typeFH;
};
export type PropDrag = {
  refDrag: any;
};
export const CustomDNDHook = ({ name, options, parent }: PropsDNDHook) => {
  const [collected, drag] = useDrag(() => ({
    type: name,
    item: { ...options, parent },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const isDragging = collected.isDragging;
  return { collected, isDragging, drag };
};
