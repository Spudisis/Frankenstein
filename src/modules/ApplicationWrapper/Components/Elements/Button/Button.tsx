import {
  ScreenAddElemeny,
  Module,
  ParentParent,
} from "src/domains/ApplicationTypes";
import { StyledButtonFullControlled } from "src/UI/Button/ButtonFullControlled";
import {
  ItemTypesDND,
  PropsDNDHook,
} from "src/components/CustomDragNDrop/CustomDNDHook";
import { useDrag, useDrop } from "react-dnd";
import { changeTarget } from "src/components";

export const Button = ({
  elem,
  parent,
  MoveCardFunc,
  FindIndex,
  ParentParent,
}: { elem: Module; MoveCardFunc: any; FindIndex: any } & Pick<
  PropsDNDHook,
  "parent"
> &
  Pick<ParentParent, "ParentParent">) => {
  const find = FindIndex(elem.id, parent);
  const originalIndex = find ? find.index : -1;

  const handleSetTarget = (e: MouseEvent) => {
    const { options, id, namePrivate, name } = elem;

    changeTarget(
      { options, name, id, namePrivate },
      { parent },
      { ParentParent }
    );
    e.stopPropagation();
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
      hover({ id: draggedId }: ScreenAddElemeny) {
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
      onClick={(e: any) => handleSetTarget(e)}
    >
      {elem.options.name ? elem.options.name : "name"}
    </StyledButtonFullControlled>
  );
};
