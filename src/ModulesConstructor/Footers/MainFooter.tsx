import { observer } from "mobx-react-lite";
import React from "react";
import styled, { css } from "styled-components";
import { CustomDNDHook, changeTarget } from "../../components";
import { ItemTypesDND } from "../../components/CustomDragNDrop/CustomDNDHook";
import { FindComponent } from "../../modules/ApplicationWrapper/Components/FindComponent/FindComponent";
import {
  FHObject,
  Module,
  Modules,
  SubModules,
  typeFH,
} from "../../domains/ApplicationTypes";
import { BlockEmpty } from "../../UI";
import App from "src/store/Application";
import { ChangeOptionsProp } from "src/domains";

type Prop = FHObject & { parent?: typeFH | string };

export const MainFooter = observer((props: Prop) => {
  const { id, options, modules } = props;

  const { drag, isDragging } = CustomDNDHook({
    name: ItemTypesDND.Footer,
    options: props,
  });

  const setTarget = () => {
    const { options, id, namePrivate, name } = props as Required<Prop>;
    const parent = "";
    changeTarget({ options, name, id, namePrivate }, { changeOptions });
  };

  const changeModules = (newModules: Modules | SubModules[]) => {
    const newSection = { ...props, modules: newModules };
    App.changeFooterHeader(typeFH.Footer, newSection);
  };
  const changeOptions = ({ options, name }: ChangeOptionsProp) => {
    const newElem = {
      ...props,
      name: name ? name : props.name,
      options: options ? options : props.options,
    };
    App.changeFooterHeader(typeFH.Footer, newElem);
  };
  return (
    <BlockEmpty ref={drag} isDragging={isDragging}>
      <StyledFooter {...options} onClick={() => setTarget()}>
        {React.useMemo(() => {
          let moduleProp = modules as Module[];

          return (
            <FindComponent
              modules={moduleProp}
              parent={props.parent}
              changeModules={changeModules}
            />
          );
        }, [modules, id])}
      </StyledFooter>
    </BlockEmpty>
  );
});

const StyledFooter = styled.div<any>`
  height: ${(props) => (props.height ? props.height : "150px")};
  border-radius: 0px 0px 25px 25px;
  overflow: hidden;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "yellow"};
  display: ${(props) => props.display || "block"};
  ${({ display }) =>
    display === "flex"
      ? css`
          justify-content: ${(props: any) =>
            props.JustifyContent || "space-evenly"};
          align-items: ${(props: any) => props.AlignItems || ""};
        `
      : display === "grid"
      ? css`
          grid-template-columns: ${(props: any) =>
            props.GridTemplateColumns || "repeat(2, 1fr)"};
          grid-template-rows: ${(props: any) =>
            props.GridTemplateRows || "auto"};
        `
      : ""}
`;
