import React from "react";
import { AbsoluteWrapperBlock, FooterMobile, HeaderMobile } from "src/UI";
import { FHMain } from "./FHMain";

import Dragging from "src/store/DraggingFH";
import { ChooseFHType, ReturnChosenFHType } from "./ChooseFH.types";
import { typeFH as FHType } from "src/domains";
import { observer } from "mobx-react-lite";
export const ChooseFH = observer(
  ({ elemScreenFh, screenId, dropHook, elemFH, typeFH }: ChooseFHType) => {
    const styles = {
      top: typeFH === FHType.Header ? "0px" : "",
      bottom: typeFH === FHType.Footer ? "0px" : "",
    };

    return (
      <>
        {elemScreenFh && "id" in elemScreenFh && elemScreenFh.id ? (
          <ReturnStyledTypeFh
            elem={elemScreenFh}
            type={typeFH}
            dropHook={dropHook}
            screenId={screenId}
          />
        ) : Object.keys(elemFH).length !== 0 && elemFH.id ? (
          <ReturnStyledTypeFh
            elem={elemFH}
            type={typeFH}
            dropHook={dropHook}
            screenId={""}
          />
        ) : Dragging.draggingActive ? (
          <AbsoluteWrapperBlock
            refDrag={dropHook}
            {...styles}
          ></AbsoluteWrapperBlock>
        ) : (
          <div></div>
        )}
      </>
    );
  }
);

const ReturnStyledTypeFh = observer(
  ({ elem, type, screenId, dropHook }: ReturnChosenFHType) => {
    //нужны разные врапперы как FooterMobile, HeaderMobile, под случаи хедера (со скрина, общий), проблема с днд
    if (!screenId) {
      return (
        <FooterMobile refDrag={dropHook}>
          <FHMain
            {...{
              ...elem,
              parent: type,
              idScreen: "",
            }}
          />
        </FooterMobile>
      );
    }
    return (
      <HeaderMobile refDrag={dropHook}>
        <FHMain
          {...{
            ...elem,
            parent: type,
            idScreen: screenId,
          }}
        />
      </HeaderMobile>
    );
  }
);
