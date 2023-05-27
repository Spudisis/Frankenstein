import React from "react";
import { Section, Wrapper, ContentWrapper, Button } from "../../../../UI";
import { ContentProp } from "../../../../UI/SideBar/Content/Content";
import { observer } from "mobx-react-lite";
import ApplicationData from "src/store/Application";
import {
  Module,
  ScreenAddElemeny,
  ScreenMas,
  SectionEnum,
} from "../../../../domains/ApplicationTypes";
import { FindOption } from "../FindOption/FindOption";
import { Pictures } from "../Pictures/Pictures";
import { DropTargetMonitor, useDrop } from "react-dnd";
import {
  DropDND,
  ItemTypesDND,
} from "../../../../components/CustomDragNDrop/CustomDNDHook";
import App from "src/store/Application";
import { CreateStoreType } from "../CreateStoreType";

export const Content = observer(
  ({ overflow }: Pick<ContentProp, "overflow">) => {
    const handleChangeSection = (section: SectionEnum) => {
      ApplicationData.changeSection(section);
    };
    const section = ApplicationData.section;

    const [{ canDrop, isOver }, drop]: DropDND = useDrop(() => ({
      accept: [
        ItemTypesDND.Button,
        ItemTypesDND.Footer,
        ItemTypesDND.Header,
        ItemTypesDND.Wrapper,
        ItemTypesDND.Text,
      ],
      drop: ({ id, deleteItemFunc }: ScreenAddElemeny) =>
        handleDeleteDND({ id, deleteItemFunc }),
      collect: (monitor: DropTargetMonitor) => ({
        canDrop: monitor.canDrop(),
        isOver: monitor.isOver(),
      }),
    }));

    const handleDeleteDND = ({
      id,
      deleteItemFunc,
    }: Pick<ScreenAddElemeny, "id" | "deleteItemFunc">) => {
      console.log(id);
      if (deleteItemFunc) {
        App.clearTarget(id);
        deleteItemFunc({ id });
      } else console.log("not found deleteItemFunc");
    };

    return (
      <ContentWrapper
        overflow={overflow}
        refDND={drop}
        bgcColor={
          canDrop && isOver ? "rgba(132, 0, 0, 0.4)" : canDrop ? "gray" : ""
        }
      >
        <Wrapper height="auto" borderBottom={"1px solid black"} padding="0px">
          <Button
            name="pictures"
            changeProp={handleChangeSection}
            prop={SectionEnum.pictures}
            padding="0px"
            margin="10px 0px"
            active={section === SectionEnum.pictures ? true : false}
          ></Button>
          <Button
            name="options"
            changeProp={handleChangeSection}
            prop={SectionEnum.options}
            padding="0px"
            margin="10px 0px"
            active={section === SectionEnum.options ? true : false}
          ></Button>
        </Wrapper>
        {section === SectionEnum.pictures ? (
          <Section>
            <CreateStoreType />
          </Section>
        ) : section === SectionEnum.options ? (
          <Section>
            <FindOption />
          </Section>
        ) : (
          <Section>
            <div></div>
          </Section>
        )}
      </ContentWrapper>
    );
  }
);
