import { Module, ParentParent } from "src/domains/ApplicationTypes";
import { StyledButtonFullControlled } from "src/UI/Button/ButtonFullControlled";
import {
  ItemTypesDND,
  PropsDNDHook,
} from "src/components/CustomDragNDrop/CustomDNDHook";
import { useDrag, useDrop } from "react-dnd";
import { changeTarget } from "src/components";
import { CustomDragHook } from "../../customDragHook";
import { CustomDropHook } from "../../customDropHook";
import { ChangeOptionsProp } from "src/domains";

export const Button = ({
  elem,
  parent,
  MoveCardFunc,
  FindIndex,
  ParentParent,
  newModules,
}: { elem: Module; MoveCardFunc: any; FindIndex: any } & Pick<
  PropsDNDHook,
  "parent"
> &
  Pick<ParentParent, "ParentParent"> & { newModules: (n: any) => void }) => {
  const handleSetTarget = (e: MouseEvent) => {
    const { options, id, namePrivate, name } = elem;

    changeTarget({ options, name, id, namePrivate }, { changeOptions });
    e.stopPropagation();
  };

  const changeOptions = ({ options, name }: ChangeOptionsProp) => {
    const newElem = {
      ...elem,
      name: name ? name : elem.name,
      options: options ? options : elem.options,
    };
    console.log(newElem);
    newModules(newElem);
  };
  const { isDragging, drag } = CustomDragHook({
    elem,
    FindIndex,
    parent,
    MoveCardFunc,
    typeDrag: ItemTypesDND.Button,
  });

  const { drop } = CustomDropHook({
    MoveCardFunc,
    elem,
    FindIndex,
  });

  return (
    <StyledButtonFullControlled
      ref={(node: HTMLButtonElement) => drag(drop(node))}
      isDragging={isDragging}
      {...elem.options}
      onClick={(e: any) => handleSetTarget(e)}
    >
      {elem.options.name ? elem.options.name : ""}
    </StyledButtonFullControlled>
  );
};
