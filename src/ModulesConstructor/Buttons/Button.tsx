import { ButtonScreenAdd, FHObject, Module } from "../../store/types/ApplicationTypes";
import { StyledButtonFullControlled } from "../../UI/Button/ButtonFullControlled";

import {
  ItemTypesDND,
  PropsDNDHook,
} from "../../components/CustomDragNDrop/CustomDNDHook";

import { useDrag, useDrop } from "react-dnd";
import { changeTarget } from "../../components";

export const Button = ({
  elem,
  parent,
  MoveCardFunc,
  FindIndex,
}: { elem: Module; MoveCardFunc: any; FindIndex: any } & Pick<
  PropsDNDHook,
  "parent"
>) => {
  const find = FindIndex(elem.id, parent);
  const originalIndex = find ? find.index : -1;

  const handleSetTarget = () => {
    const { options, id, namePrivate, name } = elem;
    changeTarget({ options, name, id, namePrivate }, {parent});
  };

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypesDND.Button,
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
      hover({ id: draggedId }: ButtonScreenAdd) {
        // console.log(draggedId, elem.id);
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
  return (
    <StyledButtonFullControlled
      ref={(node: HTMLButtonElement) => drag(drop(node))}
      isDragging={isDragging}
      {...elem.options}
      onClick={() => handleSetTarget()}
    >
      {elem.options.name ? elem.options.name : "name"}
    </StyledButtonFullControlled>
  );
};
