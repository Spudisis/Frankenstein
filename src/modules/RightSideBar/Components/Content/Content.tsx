import React from "react";
import { Section, Wrapper, ContentWrapper, Button } from "../../../../UI";
import { ContentProp } from "../../../../UI/SideBar/Content/Content";
import { observer } from "mobx-react-lite";
import ApplicationData, { Module, ScreenMas, SectionEnum } from "../../../../store/Application";
import { FindOption } from "../FindOption/FindOption";
import { Pictures } from "../Pictures/Pictures";
import { useDrop } from "react-dnd";
import { DropDND, ItemTypesDND } from "../../../../components/CustomDNDHook";

export const Content = observer(({ overflow }: Pick<ContentProp, "overflow">) => {
  const handleChangeSection = (section: SectionEnum) => {
    ApplicationData.changeSection(section);
  };
  const section = ApplicationData.section;

  const [, drop]: DropDND = useDrop(() => ({
    accept: [ItemTypesDND.Button, ItemTypesDND.Footer, ItemTypesDND.Header],
    drop: (item: ScreenMas | Module) => handleDeleteDND(item),
  }));

  const handleDeleteDND = (item: ScreenMas | Module) => {
    console.log(item);
    ApplicationData.deleteModulesOrBlock(item);
  };

  return (
    <ContentWrapper overflow={overflow} refDND={drop}>
      <Wrapper height="auto" borderBottom={"1px solid black"}>
        <Button
          name="pictures"
          changeProp={handleChangeSection}
          prop={SectionEnum.pictures}
          padding="0px"
          margin="10px"
          active={section === SectionEnum.pictures ? true : false}
        ></Button>
        <Button
          name="options"
          changeProp={handleChangeSection}
          prop={SectionEnum.options}
          padding="0px"
          margin="10px"
          active={section === SectionEnum.options ? true : false}
        ></Button>
      </Wrapper>
      {section === SectionEnum.pictures ? (
        <Section>
          <Pictures />
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
});
