import React from "react";
import { ScreenAddElemeny, Module } from "src/domains";
import { FindComponent } from "../FindComponent/FindComponent";
import { WrapperStyledDiv } from "./WrapperCustom.styles";
import { WrapperCustomT } from "./WrapperCustom.types";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypesDND } from "src/components/CustomDragNDrop/CustomDNDHook";
import { changeTarget } from "src/components";

export const WrapperCustom = ({
  elem,
  MoveCardFunc,
  FindIndex,
  parent,
}: WrapperCustomT) => {
  const find = FindIndex(elem.id, parent);
  const originalIndex = find ? find.index : -1;
  const { options, modules, id } = elem;
  const module = modules as Module[];

  const handleSetTarget = () => {
    const { options, id, namePrivate, name } = elem;
    changeTarget({ options, name, id, namePrivate }, { parent });
  };

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypesDND.Wrapper,
      item: { ...elem, parent, originalIndex },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const { id: droppedId, originalIndex } = item;
        const didDrop = monitor.didDrop();
        if (!didDrop) {
          console.log(droppedId, originalIndex);
          MoveCardFunc({
            draggedId: droppedId,
            originalIndex,
            parentButton: parent,
          });
        }
      },
    }),
    [parent, originalIndex, elem.id, MoveCardFunc]
  );
  
  const [, drop] = useDrop(
    () => ({
      accept: ItemTypesDND.Button,
      hover({ id: draggedId }: ScreenAddElemeny) {
        if (draggedId !== elem.id) {
          const find = FindIndex(elem.id);

          if (find) {
            const { index: overIndex } = find;

            MoveCardFunc({ draggedId, originalIndex: overIndex });
          }
        }
      },
    }),
    [parent, FindIndex, MoveCardFunc]
  );

  // const SetNewModuleScreen = (item: ScreenAddElemeny) => {
  //   const id = elem.id;
  //   console.log(item, id, parent);
  //   Application.changeModulesWrapper({ item, id, parent });
  // };
  // const [, dropMain]: DropDND = useDrop(() => ({
  //   accept: [ItemTypesDND.Main, ItemTypesDND.Button, ItemTypesDND.Wrapper],
  //   drop: (item: ScreenAddElemeny) => SetNewModuleScreen(item),
  // }));

  return (
    <WrapperStyledDiv
      ref={(node: HTMLButtonElement) => drag(drop(node))}
      isDragging={isDragging}
      {...options}
      onClick={() => handleSetTarget()}
    >
      {/* <div ref={dropMain}> */}
      <FindComponent modules={module} parent={id} />
      {/* </div> */}
    </WrapperStyledDiv>
  );
};
