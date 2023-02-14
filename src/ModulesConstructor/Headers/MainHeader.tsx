import React from "react";
import styled from "styled-components";
import { Module, ScreenMas, typeFH } from "../../store/Application";
import { Button } from "../Buttons/Button";
import { useDrop } from "react-dnd";
import { observer } from "mobx-react-lite";
import App from "../../store/Application";
import { CustomDNDHook } from "../../components";
import { HeaderBlocks } from "./ModulesHeader";
import { BlockEmpty } from "../../UI";

type Prop = Partial<Omit<ScreenMas, "name">>;

export const MainHeader = observer((header: Prop) => {
  const { id, options, modules } = header;

  const { drag, isDragging } = CustomDNDHook({ name: "any", options: header });

  return (
    <BlockEmpty ref={drag} isDragging={isDragging}>
      <HeaderConstructor {...options}>
        {React.useMemo(
          () => (
            <HeaderBlocks modules={modules} />
          ),
          [modules, id]
        )}
      </HeaderConstructor>
    </BlockEmpty>
  );
});

const HeaderConstructor = styled.div<any>`
  height: ${(props) => (props.height ? props.height : "150px")};
  border: 1px solid black;
  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : "yellow")};
`;
