import React from "react";
import Dragging from "../../store/DraggingFH";
import { getEmptyImage } from "react-dnd-html5-backend";
import { CustomDNDHook, ItemTypesDND } from "../CustomDragNDrop/CustomDNDHook";
import { TypePicture } from "./PicturesRows";
import { Pictures } from "../../UI";
export const Picture = ({ elem, type }: { elem: any; type: TypePicture }) => {
  const options = elem.options;
  const DND = CustomDNDHook({ name: type, options });
  const dragPreview = DND.dragPreview;

  React.useEffect(() => {
    if (
      type === ItemTypesDND.PicturesFooter ||
      type === ItemTypesDND.PicturesHeader ||
      type === ItemTypesDND.PicturesButton ||
      type === ItemTypesDND.PicturesWrapper
    ) {
      Dragging.changeStatusDragging(DND.isDragging);
      console.log(DND.isDragging);
    }
  }, [DND.isDragging]);

  React.useEffect(() => {
    dragPreview(getEmptyImage(), { captureDraggingState: true });
  }, []);
  return (
    <Pictures
      refDrag={DND.drag}
      isDragging={DND.isDragging}
      src={elem.src}
      alt={elem.alt}
      name={elem.options.name}
      key={elem.options.id}
    />
  );
};
