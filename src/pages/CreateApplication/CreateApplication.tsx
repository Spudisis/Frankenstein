import React from "react";
import {
  ApplicationWrapper,
  Header,
  LeftSideBar,
  RightSideBar,
} from "../../modules";
import { Root, Wrapper } from "../../UI";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useParams } from "react-router-dom";
import App from "src/store/Application";
export const CreateApplication = () => {
  const { id } = useParams();
  React.useEffect(() => {
    if (id) {
      App.getProject(id);
    }
  }, [id]);
  
  return (
    <>
      <Header />
      <DndProvider backend={HTML5Backend}>
        <Root overflow="hidden">
          <Wrapper padding={"0px"}>
            <LeftSideBar />
            <ApplicationWrapper />
            <RightSideBar />
          </Wrapper>
        </Root>
      </DndProvider>
    </>
  );
};
