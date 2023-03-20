import React from "react";
import { ApplicationWrapper, LeftSideBar, RightSideBar } from "../../modules";
import { Root, Wrapper } from "../../UI";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
export const CreateApplication = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Root overflow="hidden">
        <Wrapper padding={"0px"}>
          <LeftSideBar />
          <ApplicationWrapper />
          <RightSideBar />
        </Wrapper>
      </Root>
    </DndProvider>
  );
};
