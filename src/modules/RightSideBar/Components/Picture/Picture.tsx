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
      src={
        elem.miniature
          ? process.env.REACT_APP_URL_BACKEND + elem.miniature
          : "https://i.mycdn.me/image?id=814327925848&t=0&plc=WEB&tkn=*GsdCWAmDvjL9x0vo-r1OjNdHSKY"
      }
      alt={elem.name}
      name={elem.name}
      key={elem.id}
    />
  );
};
