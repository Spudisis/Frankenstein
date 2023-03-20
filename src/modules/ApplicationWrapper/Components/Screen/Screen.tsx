import { observer } from "mobx-react-lite";
import React from "react";
import styled from "styled-components";
import {
  AbsoluteWrapperBlock,
  FooterMobile,
  HeaderMobile,
  MobileMain,
  ScreenStyle,
  Wrapper,
} from "../../../../UI";
import { ParamsScreen } from "../../../../UI/ScreenStyled/ScreenStyled";
import Application, {
  ScreenMas,
  typeFH,
  FHObject,
  Module,
  ButtonScreenAdd,
} from "../../../../store/Application";

import {
  MainConstructor,
  MainFooter,
  MainHeader,
} from "../../../../ModulesConstructor";

import { useDrop } from "react-dnd";
import Dragging from "../../../../store/DraggingFH";
import {
  DropDND,
  ItemTypesDND,
} from "../../../../components/CustomDragNDrop/CustomDNDHook";

type ScreenProps = ParamsScreen & { elem: ScreenMas };

export const Screen = observer(({ margin, elem }: ScreenProps) => {
  const header = Application.ApplicationHeader;
  const footer = Application.ApplicationFooter;

  const [, dropHeader]: DropDND = useDrop(() => ({
    accept: ItemTypesDND.PicturesHeader,
    drop: (item: FHObject) => SetNewHeader(typeFH.Header, item),
  }));
  const [, dropFooter]: DropDND = useDrop(() => ({
    accept: ItemTypesDND.PicturesFooter,
    drop: (item: FHObject) => SetNewHeader(typeFH.Footer, item),
  }));
  const [, dropMain]: DropDND = useDrop(() => ({
    accept: [ItemTypesDND.Main, ItemTypesDND.Button],
    drop: (item: ButtonScreenAdd) => SetNewModuleScreen(item),
  }));

  const SetNewHeader = (type: typeFH, item: FHObject) => {
    console.log(type);
    Application.changeFooterHeader(type, item);
  };

  const SetNewModuleScreen = (item: ButtonScreenAdd) => {
    const id = elem.id;

    Application.changeModules({ item, id });
  };

  return (
    <ScreenStyle margin={margin}>
      <Wrapper
        justify="space-between"
        direction="column"
        height="100%"
        position="relative"
        padding={"0px"}
        background="#D9D9D9"
      >
        {/* Проверяем наличие ключей у хедера, если есть, показываем хедер, если нет - проверяем в каком состоянии драггинг для сета
          хедера и футера, при тру - показывается прозрачный блок, в который можно сетнуть хедер/футер, при фолс - пустой блок
        */}
        {Object.keys(header).length !== 0 ? (
          <HeaderMobile refDrag={dropHeader}>
            <MainHeader {...{ ...header, parent: typeFH.Header }} />
          </HeaderMobile>
        ) : Dragging.draggingActive ? (
          <AbsoluteWrapperBlock
            refDrag={dropHeader}
            top={"0px"}
          ></AbsoluteWrapperBlock>
        ) : (
          <div></div>
        )}

        <MobileMain refDrag={dropMain}>
          <>
            {elem.modules && elem.modules.length !== 0 && (
              <MainConstructor {...elem} />
            )}
          </>
        </MobileMain>

        {/* та же логика, что и у хедера */}
        {Object.keys(footer).length !== 0 ? (
          <FooterMobile refDrag={dropFooter}>
            <MainFooter {...{ ...footer, parent: typeFH.Footer }} />
          </FooterMobile>
        ) : Dragging.draggingActive ? (
          <AbsoluteWrapperBlock
            refDrag={dropFooter}
            bottom={"0px"}
          ></AbsoluteWrapperBlock>
        ) : (
          <div></div>
        )}
      </Wrapper>
    </ScreenStyle>
  );
});
// 360 / 760
