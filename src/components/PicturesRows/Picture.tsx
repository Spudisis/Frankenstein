import React from "react";
import { getEmptyImage } from "react-dnd-html5-backend";
import { CustomDNDHook } from "../CustomDragNDrop/CustomDNDHook";
import { TypePicture } from "./PicturesRows";
import { Pictures } from "../../UI";
export const Picture = ({ elem, type }: { elem: any; type: TypePicture }) => {
  const options = elem.options;
  const DND = CustomDNDHook({ name: type, options });
  const dragPreview = DND.dragPreview;
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
