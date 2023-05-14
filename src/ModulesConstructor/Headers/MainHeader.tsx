import React from "react";
import styled from "styled-components";
import { FHObject, Module, typeFH } from "../../domains/ApplicationTypes";

import { observer } from "mobx-react-lite";

import { CustomDNDHook, changeTarget } from "../../components";
import { FindComponent } from "../../modules/ApplicationWrapper/Components/FindComponent/FindComponent";
import { BlockEmpty } from "../../UI";
import { ItemTypesDND } from "../../components/CustomDragNDrop/CustomDNDHook";

type Prop = FHObject & { parent?: typeFH | string };

export const MainHeader = observer((props: Prop) => {
  const { id, options, modules, namePrivate, name } = props as Required<Prop>;

  const { drag, isDragging } = CustomDNDHook({
    name: ItemTypesDND.Header,
    options: props,
  });

  const setTarget = () => {
    const parent = "";
    changeTarget({ options, name, id, namePrivate }, { parent });
  };

  return (
    <BlockEmpty ref={drag} isDragging={isDragging}>
      <HeaderConstructor {...options} onClick={() => setTarget()}>
        {React.useMemo(() => {
          let moduleProp = modules as Module[];

          return <FindComponent modules={moduleProp} parent={props.parent} />;
        }, [modules, id])}
      </HeaderConstructor>
    </BlockEmpty>
  );
});

const HeaderConstructor = styled.div<any>`
  height: ${(props) => (props.height ? props.height : "150px")};
  border-radius: 25px 25px 0px 0px;
  overflow: hidden;
  background-color: ${(props) => {
    console.log(props);
    return props.backgroundColor ? props.backgroundColor : "yellow";
  }};
`;
