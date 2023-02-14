import { observer } from "mobx-react-lite";
import React from "react";
import styled from "styled-components";
import { CreateScreen } from "./Components/CreateScreen/CreateScreen";
import { Screen } from "./Components/Screen/Screen";
import ApplicationData, { ScreenMas } from "../../store/Application";

export const ApplicationWrapper = observer(() => {
  const mas = ApplicationData.ApplicationScreens;
  return (
    <Container>
      <ApplicationWrapperStyled>
        {mas &&
          mas.map((elem: ScreenMas, index: number) => {
            return <Screen margin="20px" elem={elem} key={index} />;
          })}
        <CreateScreen margin="20px" />
      </ApplicationWrapperStyled>
    </Container>
  );
});

const ApplicationWrapperStyled = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

const Container = styled.div`
  display: block;
  overflow: auto;
  width: 100%;
  height: 100%;
  background-color: #e0e0e0;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: #ececec;
  }
  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgb(0, 0, 0);
  }
`;
