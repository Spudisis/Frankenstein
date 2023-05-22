import React from "react";
import Dragging from "src/store/DraggingFH";
import { getEmptyImage } from "react-dnd-html5-backend";
import { CustomDNDHook, ItemTypesDND } from "../CustomDragNDrop/CustomDNDHook";
import { TypePicture } from "./PicturesRows";
import { Pictures } from "src/UI";
import { CreateId } from "../CreateId/CreateId";
import { TypeElem } from "./Picture.types";
export const Picture = ({
  elem,
  type,
}: {
  elem: TypeElem;
  type: TypePicture;
}) => {
  const [item, setItem] = React.useState(elem);

  const { dragPreview, isDragging, drag } = CustomDNDHook({
    name: type,
    options: item.options,
  });

  React.useEffect(() => {
    if (
      type === ItemTypesDND.PicturesFooter ||
      type === ItemTypesDND.PicturesHeader ||
      type === ItemTypesDND.PicturesButton ||
      type === ItemTypesDND.PicturesWrapper
    ) {
      Dragging.changeStatusDragging(isDragging);
    }
  }, [isDragging]);

  React.useEffect(() => {
    dragPreview(getEmptyImage(), { captureDraggingState: true });
  }, [dragPreview]);

  return (
    <Pictures
      refDrag={drag}
      isDragging={isDragging}
      src={item.src}
      alt={item.alt}
      name={item.options.name}
      key={item.options.id}
    />
  );
};
