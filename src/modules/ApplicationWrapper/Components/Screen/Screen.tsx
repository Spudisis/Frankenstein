import { observer } from "mobx-react-lite";
import React from "react";
import styled from "styled-components";
import { AbsoluteWrapperBlock, FooterMobile, HeaderMobile, MobileMain, ScreenStyle, Wrapper } from "../../../../UI";
import { ParamsScreen } from "../../../../UI/ScreenStyled/ScreenStyled";
import Application, { ScreenMas, typeFH, FHObject, Module } from "../../../../store/Application";

import { MainConstructor, MainFooter, MainHeader } from "../../../../ModulesConstructor";

import { useDrop } from "react-dnd";

import { DropDND, ItemTypesDND } from "../../../../components/CustomDNDHook";

type ScreenProps = ParamsScreen & { elem: ScreenMas };

export const Screen = observer(({ margin, elem }: ScreenProps) => {
  const header = Application.ApplicationHeader;
  const footer = Application.ApplicationFooter;

  const [, dropHeader]: DropDND = useDrop(() => ({
    accept: ItemTypesDND.Header,
    drop: (item: FHObject) => SetNewHeader(typeFH.Header, item),
  }));
  const [, dropFooter]: DropDND = useDrop(() => ({
    accept: ItemTypesDND.Footer,
    drop: (item: FHObject) => SetNewHeader(typeFH.Footer, item),
  }));
  const [, dropMain]: DropDND = useDrop(() => ({
    accept: [ItemTypesDND.Main, ItemTypesDND.Button],
    drop: (item: any) => SetNewModuleScreen(item),
  }));

  const SetNewHeader = (type: typeFH, item: FHObject) => {
    console.log(type);
    Application.changeFooterHeader(type, item);
  };

  const SetNewModuleScreen = (item: any) => {
    const id = elem.id;
    console.log(id);
    Application.changeModules({ item, id });
  };

  return (
    <ScreenStyle margin={margin}>
      <Wrapper justify="space-between" direction="column" height="100%" position="relative">
        {Object.keys(header).length !== 0 ? (
          <HeaderMobile refDrag={dropHeader}>
            <MainHeader {...{ ...header, parent: typeFH.Header }} />
          </HeaderMobile>
        ) : (
          <AbsoluteWrapperBlock refDrag={dropHeader} top={"0px"}></AbsoluteWrapperBlock>
        )}

        <MobileMain refDrag={dropMain}>
          <>{elem.modules && elem.modules.length !== 0 && <MainConstructor {...elem} />}</>
        </MobileMain>

        {Object.keys(footer).length !== 0 ? (
          <FooterMobile refDrag={dropFooter}>
            <MainFooter {...{ ...footer, parent: typeFH.Footer }} />
          </FooterMobile>
        ) : (
          <AbsoluteWrapperBlock refDrag={dropFooter} bottom={"0px"}></AbsoluteWrapperBlock>
        )}
      </Wrapper>
    </ScreenStyle>
  );
});
// 360 / 760
