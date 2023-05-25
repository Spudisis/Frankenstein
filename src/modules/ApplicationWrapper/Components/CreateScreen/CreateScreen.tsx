import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from "styled-components";
import { Button, ScreenStyle } from "src/UI";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { ParamsScreen } from "src/UI/ScreenStyled/ScreenStyled";
import { observer } from "mobx-react-lite";
import ApplicationData from "src/store/Application";

export const CreateScreen = observer(({ margin }: ParamsScreen) => {
  const handleCreate = (_: unknown) => {
    ApplicationData.addScreen();
  };
  return (
    <ScreenStyle margin={margin} NewScreen>
      <CreateScreenWrapper>
        <Button
          changeProp={handleCreate}
          prop={""}
          name=""
          width="300px"
          height="300px"
          fontSize="50px"
          background="inherit"
          hover={false}
        >
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </CreateScreenWrapper>
    </ScreenStyle>
  );
});

const CreateScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
