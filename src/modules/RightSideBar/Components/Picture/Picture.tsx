import React from "react";
import Dragging from "src/store/DraggingFH";
import { getEmptyImage } from "react-dnd-html5-backend";
import {
  CreateMasItemTypesDND,
  CustomDNDHook,
} from "src/components/CustomDragNDrop/CustomDNDHook";
import { Pictures } from "src/UI";
import { PictureTypeProps } from "./Picture.types";

export const Picture = ({ elem, type }: PictureTypeProps) => {
  const layout = JSON.parse(elem.layout);

  const { dragPreview, isDragging, drag } = CustomDNDHook({
    name: type,
    options: layout,
  });

  React.useEffect(() => {
    const MasType = CreateMasItemTypesDND();
    if (MasType.includes(type)) {
      Dragging.changeStatusDragging(isDragging);
    }
  }, [isDragging, type]);

  React.useEffect(() => {
    dragPreview(getEmptyImage(), { captureDraggingState: true });
  }, [dragPreview]);

  return (
    <Pictures
      refDrag={drag}
      isDragging={isDragging}
      src={elem.miniature || "notFound"}
      alt={elem.name}
      name={elem.name}
      key={elem.id}
    />
  );
};
