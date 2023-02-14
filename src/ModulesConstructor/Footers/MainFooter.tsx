import { observer } from "mobx-react-lite";
import React from "react";
import styled from "styled-components";
import { CustomDNDHook } from "../../components";
import { ItemTypesDND } from "../../components/CustomDNDHook";
import { FindComponent } from "../../modules/ApplicationWrapper/Components/FindComponent/FindComponent";
import { FHObject, Module, typeFH } from "../../store/Application";
import { BlockEmpty } from "../../UI";

import { Button } from "../Buttons/Button";
type Prop = Omit<FHObject, "name"> & { parent: typeFH | string };

export const MainFooter = observer((props: Prop) => {
  const { id, options, modules } = props;
  const { drag, isDragging } = CustomDNDHook({ name: ItemTypesDND.Footer, options: props });
  return (
    <BlockEmpty ref={drag} isDragging={isDragging}>
      <StyledFooter {...options}>
        {React.useMemo(
          () => (
            <FindComponent modules={modules} parent={props.parent} />
          ),
          [modules, id]
        )}
      </StyledFooter>
    </BlockEmpty>
  );
});

const StyledFooter = styled.div<any>`
  height: ${(props) => (props.height ? props.height : "150px")};
  border: 1px solid black;
  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : "yellow")};
`;
