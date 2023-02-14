import { observer } from "mobx-react-lite";
import React from "react";
import styled from "styled-components";
import { CustomDNDHook } from "../../components";
import { Module, ScreenMas, typeFH } from "../../store/Application";
import { BlockEmpty } from "../../UI";

import { Button } from "../Buttons/Button";
type Prop = Partial<Omit<ScreenMas, "name">>;

export const MainFooter = observer((footer: Prop) => {
  const { id, options, modules } = footer;
  const { drag, isDragging } = CustomDNDHook({ name: "any", options: footer });
  const parent = typeFH.Footer;
  return (
    <BlockEmpty ref={drag} isDragging={isDragging}>
      <StyledFooter {...options}>
        {modules &&
          modules.map((elem: Module | undefined) => {
            if (typeof elem !== "undefined" && elem.namePrivate === "Button") {
              return <Button key={elem.id} options={elem.options} elem={elem} parent={parent} />;
            }
          })}
      </StyledFooter>
    </BlockEmpty>
  );
});

const StyledFooter = styled.div<any>`
  height: ${(props) => (props.height ? props.height : "150px")};
  border: 1px solid black;
  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : "yellow")};
`;
