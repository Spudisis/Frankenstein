import React from "react";
import { Module, typeFH } from "../../store/Application";
import { StyledButtonFullControlled } from "../../UI/Button/ButtonFullControlled";
import { ConnectDragSource } from "react-dnd/dist/types";
import { CustomDNDHook } from "../../components";
import { PropsDNDHook } from "../../components/CustomDNDHook";

export const Button = ({ options, elem, parent }: Pick<Module, "options"> & { elem: Module } & Pick<PropsDNDHook, 'parent'>) => {
  const DnDModule = CustomDNDHook({ name: "any", options: elem, parent: parent });
  return (
    <StyledButtonFullControlled ref={DnDModule.drag} isDragging={DnDModule.isDragging} {...options}>
      {options.name ? options.name : "name"}
    </StyledButtonFullControlled>
  );
};
