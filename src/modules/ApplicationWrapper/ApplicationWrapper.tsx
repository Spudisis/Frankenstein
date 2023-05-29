import { observer } from "mobx-react-lite";
import React from "react";
import styled from "styled-components";
import { CreateScreen } from "./Components/CreateScreen/CreateScreen";
import { Screen } from "./Components/Screen/Screen";
import ApplicationData from "../../store/Application";
import { ScreenMas } from "../../domains/ApplicationTypes";
import { ApplicationBuild, Container } from "../../UI";
import App from "src/store/Application";
import { useThrottle } from "src/components";
import { STATUS_LOADING } from "src/domains";

export const ApplicationWrapper = observer(() => {
  const mas = ApplicationData.ApplicationScreens;
  const header = ApplicationData.ApplicationHeader;
  const footer = ApplicationData.ApplicationFooter;

  const SaveProjectThrottle = () => {
    App.saveProject();
  };
  const throttledFunc = useThrottle(SaveProjectThrottle, 3000);

  React.useEffect(() => {
    throttledFunc(); // Вызываем функцию троттлинга при изменении зависимостей
  }, [mas, header, footer, header.modules, footer.modules]);

  React.useEffect(() => {
    const handleUnload = (event: BeforeUnloadEvent) => {
      throttledFunc();
      event.preventDefault();
      event.returnValue = "";
    };
    window.addEventListener("beforeunload", handleUnload);
    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []);

  return (
    <Container>
      <ApplicationBuild>
        {mas &&
          mas.length !== 0 &&
          mas.map((elem: ScreenMas, index: number) => {
            return (
              <Screen
                margin="20px"
                elem={elem}
                key={index}
                throttledFunc={throttledFunc}
              />
            );
          })}
        <CreateScreen margin="20px" />
      </ApplicationBuild>
    </Container>
  );
});
