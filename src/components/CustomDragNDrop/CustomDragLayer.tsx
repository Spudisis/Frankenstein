import type { CSSProperties } from "react";
import type { XYCoord } from "react-dnd";
import { useDragLayer } from "react-dnd";
import { MaxWidth } from "../../UI";
import { ItemTypesDND } from "./CustomDNDHook";

import { FHMain } from "../../modules/ApplicationWrapper/Components/FHMain";
import {
  Button,
  Text,
} from "src/modules/ApplicationWrapper/Components/Elements";
import { Module, SubModules, typeFH } from "src/domains";
import { MaxWidthButton, MaxWidthText } from "src/UI/CustomLayoutDND/MaxWidth";
import { WrapperCustom } from "src/modules/ApplicationWrapper/Components";
const layerStyles: CSSProperties = {
  position: "fixed",
  pointerEvents: "none",
  zIndex: 100,
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
};

function getItemStyles(initialOffset: XYCoord | null) {
  if (!initialOffset) {
    return {
      display: "none",
    };
  }

  let { x, y } = initialOffset;
  const transform = `translate(${x - 165}px, ${y - 10}px)`;
  return {
    transform,
    WebkitTransform: transform,
  };
}

export interface CustomDragLayerProps {
  snapToGrid: boolean;
}

export const CustomDragLayer = () => {
  const { itemType, isDragging, item, initialOffset } = useDragLayer(
    (monitor) => ({
      item: monitor.getItem(),
      itemType: monitor.getItemType(),
      //initialOffset currentOffset нужен чтобы превью могло перемещаться

      initialOffset: monitor.getClientOffset(),
      isDragging: monitor.isDragging(),
    })
  );

  function renderItem() {
    switch (itemType) {
      case ItemTypesDND.PicturesHeader:
        //если драгбл в руках это бокс
        return (
          <MaxWidth>
            <FHMain {...{ ...item, parent: typeFH.Header }} />
          </MaxWidth>
        );
      case ItemTypesDND.PicturesFooter:
        return (
          <MaxWidth>
            <FHMain {...{ ...item, parent: typeFH.Footer }} />
          </MaxWidth>
        );
      case ItemTypesDND.PicturesButton:
        return (
          <MaxWidthButton>
            <Button
              deleteItemFunc={() => console.log("")}
              newModules={() => console.log("")}
              elem={item as Module}
              parent={""}
              MoveCardFunc={() => console.log("")}
              FindIndex={() => console.log("")}
            />
          </MaxWidthButton>
        );
      case ItemTypesDND.PicturesWrapper:
        return (
          <MaxWidth>
            <WrapperCustom
              deleteItemFunc={() => console.log("")}
              newModules={() => console.log("")}
              elem={item as SubModules}
              parent={""}
              MoveCardFunc={() => console.log("")}
              FindIndex={() => console.log("sam")}
            />
          </MaxWidth>
        );
      case ItemTypesDND.PicturesText:
        return (
          <MaxWidthText>
            <Text
              deleteItemFunc={() => console.log("")}
              newModules={() => console.log("")}
              elem={item as SubModules}
              parent={""}
              MoveCardFunc={() => console.log("")}
              FindIndex={() => console.log("")}
            />
          </MaxWidthText>
        );
      default:
        return null;
    }
  }

  if (!isDragging) {
    return null;
  }
  return (
    //style нужен чтобы превью могло перемещаться
    <div style={layerStyles}>
      <div style={getItemStyles(initialOffset)}>{renderItem()}</div>
    </div>
  );
};
