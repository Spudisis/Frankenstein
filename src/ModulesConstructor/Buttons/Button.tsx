import { Module } from "../../store/Application";
import { StyledButtonFullControlled } from "../../UI/Button/ButtonFullControlled";

import { CustomDNDHook } from "../../components";
import { ItemTypesDND, PropsDNDHook } from "../../components/CustomDragNDrop/CustomDNDHook";

export const Button = ({ elem, parent }: { elem: Module } & Pick<PropsDNDHook, "parent">) => {
  const DnDModule = CustomDNDHook({ name: ItemTypesDND.Button, options: elem, parent: parent });
  const options = elem.options;
  return (
    <StyledButtonFullControlled ref={DnDModule.drag} isDragging={DnDModule.isDragging} {...options}>
      {options.name ? options.name : "name"}
    </StyledButtonFullControlled>
  );
};
