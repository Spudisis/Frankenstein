import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { Button, ScreenStyle } from "../../../../UI";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { ParamsScreen } from "../../../../UI/ScreenStyled/ScreenStyled";
import { observer } from "mobx-react-lite";
import ApplicationData from "../../../../store/Application";
// type CreateScreenProps<T> = {
//   mas: Prop<T>;
//   newStr: T;
//   setMas: (n: Prop<T>) => void;
// };

type Prop<T> = (string | T)[];

export const CreateScreen = observer(({ margin }: ParamsScreen) => {
  const handleCreate = (_: any) => {
    ApplicationData.addScreen();
  };
  return (
    <ScreenStyle margin={margin}>
      <CreateScreenWrapper>
        <Button changeProp={handleCreate} prop={""} name="" width="300px" height="300px" fontSize="50px">
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
