import React from "react";
import styled from "styled-components";
import { FHObject, typeFH } from "../../domains/ApplicationTypes";

import { observer } from "mobx-react-lite";

import { CustomDNDHook } from "../../components";
import { FindComponent } from "../../modules/ApplicationWrapper/Components/FindComponent/FindComponent";
import { BlockEmpty } from "../../UI";
import { ItemTypesDND } from "../../components/CustomDragNDrop/CustomDNDHook";

type Prop = Omit<FHObject, "name"> & { parent?: typeFH | string };

export const MainHeader = observer((props: Prop) => {
  const { id, options, modules } = props;

  const { drag, isDragging } = CustomDNDHook({
    name: ItemTypesDND.Header,
    options: props,
  });

  return (
    <BlockEmpty ref={drag} isDragging={isDragging}>
      <HeaderConstructor {...options}>
        {React.useMemo(
          () => (
            <FindComponent modules={modules} parent={props.parent} />
          ),
          [modules, id]
        )}
      </HeaderConstructor>
    </BlockEmpty>
  );
});

const HeaderConstructor = styled.div<any>`
  height: ${(props) => (props.height ? props.height : "150px")};
  border-radius: 25px 25px 0px 0px;
  overflow: hidden;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "yellow"};
`;
