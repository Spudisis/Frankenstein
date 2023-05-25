import { observer } from "mobx-react-lite";
import React from "react";
import styled from "styled-components";
import {
  AbsoluteWrapperBlock,
  DefaultButton,
  FooterMobile,
  HeaderMobile,
  MobileMain,
  ScreenStyle,
  Wrapper,
} from "../../../../UI";
import { ParamsScreen } from "../../../../UI/ScreenStyled/ScreenStyled";
import Application from "../../../../store/Application";
import {
  ScreenMas,
  typeFH,
  FHObject,
  Module,
  ScreenAddElemeny,
} from "../../../../domains/ApplicationTypes";

import { useDrop } from "react-dnd";
import Dragging from "../../../../store/DraggingFH";
import {
  DropDND,
  ItemTypesDND,
} from "../../../../components/CustomDragNDrop/CustomDNDHook";
import { useThrottle } from "../Throttle";
import { STATUS_LOADING } from "src/domains";
import { ChangeLayoutModule } from "src/utils";
import { TestStore } from "../../store";
import { ModalChooseTargetScreenHF } from "../ModalChooseTargetScreenHF";
import { FHMain } from "../FHMain";
import { MainConstructor } from "../MainConstructor";

type ScreenProps = ParamsScreen & { elem: ScreenMas } & {
  throttledFunc: () => void;
};

export const Screen = observer(
  ({ margin, elem, throttledFunc }: ScreenProps) => {
    const header = Application.ApplicationHeader;
    const footer = Application.ApplicationFooter;

    React.useEffect(() => {
      throttledFunc(); // Вызываем функцию троттлинга при изменении зависимостей
    }, [elem, elem.modules, header, footer, header.modules, footer.modules]);

    const [, dropHeader]: DropDND = useDrop(
      () => ({
        accept: [ItemTypesDND.PicturesHeader],
        drop: (item: FHObject) => SetNewHF(typeFH.Header, item),
      }),
      [elem, header]
    );
    const [, dropFooter]: DropDND = useDrop(
      () => ({
        accept: [ItemTypesDND.PicturesFooter],
        drop: (item: FHObject) => SetNewHF(typeFH.Footer, item),
      }),
      [elem, footer]
    );
    const [, dropMain]: DropDND = useDrop(() => ({
      accept: [
        ItemTypesDND.Main,
        ItemTypesDND.Button,
        ItemTypesDND.Wrapper,
        ItemTypesDND.PicturesButton,
        ItemTypesDND.PicturesWrapper,
        ItemTypesDND.PicturesText,
      ],
      drop: (item: ScreenAddElemeny) => {
        if (TestStore.test !== item.id) {
          ChangeLayoutModule({ item, id: elem.id });
        }
        TestStore.test = "";
      },
    }));

    const SetNewHF = (type: typeFH, item: FHObject) => {
      TestStore.setItem = item;
      TestStore.typeFH = type;
      TestStore.idScreen = elem.id;
      TestStore.openModalChooseHFScreen = true;
    };

    return (
      <ScreenStyle margin={margin}>
        <>
          {TestStore.openModalChooseHFScreen && <ModalChooseTargetScreenHF />}
        </>
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
          {elem.uncommonHeader &&
          Object.keys(elem.uncommonHeader).length !== 0 &&
          elem.uncommonHeader.id ? (
            <HeaderMobile refDrag={dropHeader}>
              <FHMain
                {...{
                  ...elem.uncommonHeader,
                  parent: typeFH.Header,
                  idScreen: elem.id,
                }}
              />
            </HeaderMobile>
          ) : Object.keys(header).length !== 0 && header.id ? (
            <FooterMobile refDrag={dropHeader}>
              <FHMain {...{ ...header, parent: typeFH.Header, idScreen: "" }} />
            </FooterMobile>
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
          {elem.uncommonFooter &&
          Object.keys(elem.uncommonFooter).length !== 0 &&
          elem.uncommonFooter.id ? (
            <HeaderMobile refDrag={dropFooter}>
              <FHMain
                {...{
                  ...elem.uncommonFooter,
                  parent: typeFH.Footer,
                  idScreen: elem.id,
                }}
              />
            </HeaderMobile>
          ) : Object.keys(footer).length !== 0 && footer.id ? (
            <FooterMobile refDrag={dropFooter}>
              <FHMain {...{ ...footer, parent: typeFH.Footer, idScreen: "" }} />
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
  }
);
// 360 / 760
