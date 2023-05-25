import { observer } from "mobx-react-lite";
import React from "react";
import { MobileMain, ScreenStyle, Wrapper } from "src/UI";
import { ParamsScreen } from "src/UI/ScreenStyled/ScreenStyled";
import Application from "src/store/Application";
import {
  ScreenMas,
  typeFH,
  FHObject,
  ScreenAddElemeny,
} from "src/domains/ApplicationTypes";

import { useDrop } from "react-dnd";

import {
  DropDND,
  ItemTypesDND,
} from "../../../../components/CustomDragNDrop/CustomDNDHook";

import { ChangeLayoutModule } from "src/utils";
import { TestStore } from "../../store";
import { ModalChooseTargetScreenHF } from "../ModalChooseTargetScreenHF";
import { ChooseFH } from "../FHMain";
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
    }, [
      elem,
      elem.modules,
      header,
      footer,
      header.modules,
      footer.modules,
      throttledFunc,
    ]);

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
          <ChooseFH
            elemScreenFh={elem.uncommonHeader}
            screenId={elem.id}
            dropHook={dropHeader}
            elemFH={header}
            typeFH={typeFH.Header}
          />

          <MobileMain refDrag={dropMain}>
            <>
              {elem.modules && elem.modules.length !== 0 && (
                <MainConstructor {...elem} />
              )}
            </>
          </MobileMain>

          <ChooseFH
            elemScreenFh={elem.uncommonFooter}
            screenId={elem.id}
            dropHook={dropFooter}
            elemFH={footer}
            typeFH={typeFH.Footer}
          />
        </Wrapper>
      </ScreenStyle>
    );
  }
);
// 360 / 760
