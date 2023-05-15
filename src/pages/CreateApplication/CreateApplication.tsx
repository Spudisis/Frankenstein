import React from "react";
import {
  ApplicationWrapper,
  Header,
  LeftSideBar,
  Loader,
  RightSideBar,
} from "src/modules";
import { Root, Wrapper } from "src/UI";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useNavigate, useParams } from "react-router-dom";
import App from "src/store/Application";

import { NOT_FOUND } from "src/routes/urlsPages";
import { STATUS_LOADING } from "src/domains";
import { observer } from "mobx-react-lite";
export const CreateApplication = observer(() => {
  const { id } = useParams();

  const redirect = useNavigate();

  React.useEffect(() => {
    if (id) {
      FindProject(id);
    }
  }, [id]);

  const FindProject = async (id: string) => {
    const res = await App.getProject(id);
    if (!res) {
      redirect(NOT_FOUND);
    }
  };

  const loader = App.loading === STATUS_LOADING.LOADING;

  return (
    <>
      <Header />
      {loader ? (
        <Loader />
      ) : (
        <DndProvider backend={HTML5Backend}>
          <Root overflow="hidden">
            <Wrapper padding={"0px"}>
              <LeftSideBar />
              <ApplicationWrapper />
              <RightSideBar />
            </Wrapper>
          </Root>
        </DndProvider>
      )}
    </>
  );
});
