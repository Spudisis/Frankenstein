import { observer } from "mobx-react-lite";
import React from "react";
import styled from "styled-components";
import { CreateScreen } from "./Components/CreateScreen/CreateScreen";
import { Screen } from "./Components/Screen/Screen";
import ApplicationData from "../../store/Application";
import { ScreenMas } from "../../domains/ApplicationTypes";
import { ApplicationBuild, Container } from "../../UI";

export const ApplicationWrapper = observer(() => {
  const mas = ApplicationData.ApplicationScreens;
  return (
    <Container>
      <ApplicationBuild>
        {mas &&
          mas.length !== 0 &&
          mas.map((elem: ScreenMas, index: number) => {
            return <Screen margin="20px" elem={elem} key={index} />;
          })}
        <CreateScreen margin="20px" />
      </ApplicationBuild>
    </Container>
  );
});
