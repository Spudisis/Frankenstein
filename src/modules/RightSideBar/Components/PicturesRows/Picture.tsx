import React from "react";
import Dragging from "src/store/DraggingFH";
import { getEmptyImage } from "react-dnd-html5-backend";
import {
  CustomDNDHook,
  ItemTypesDND,
} from "../../../../components/CustomDragNDrop/CustomDNDHook";
import { Pictures } from "src/UI";
import { TemplateType } from "src/domains";

export const Picture = ({
  elem,
  type,
}: {
  elem: TemplateType;
  type: string;
}) => {
  const layout = JSON.parse(elem.layout);

  const { dragPreview, isDragging, drag } = CustomDNDHook({
    name: type,
    options: layout,
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
      src={elem.miniature || "notFound"}
      alt={elem.name}
      name={elem.name}
      key={elem.id}
    />
  );
};
