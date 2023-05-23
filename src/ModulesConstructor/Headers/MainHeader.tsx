import React from "react";
import {
  FHObject,
  Module,
  Modules,
  ScreenAddElemeny,
  SubModules,
  typeFH,
} from "../../domains/ApplicationTypes";
import { observer } from "mobx-react-lite";
import { CustomDNDHook, changeTarget } from "../../components";
import { FindComponent } from "../../modules/ApplicationWrapper/Components/FindComponent/FindComponent";
import { BlockEmpty } from "../../UI";
import { ItemTypesDND } from "../../components/CustomDragNDrop/CustomDNDHook";
import { HeaderConstructor } from "./MainHeader.styles";
import App from "src/store/Application";
import { ChangeOptionsProp } from "src/domains";
import { useDrop } from "react-dnd";
import { CustomDropHook } from "../customDropHook";

type Prop = FHObject & { parent?: typeFH | string };

export const MainHeader = observer((props: Prop) => {
  const { id, options, modules, namePrivate, name } = props as Required<Prop>;

  const { drag, isDragging } = CustomDNDHook({
    name: ItemTypesDND.Header,
    options: props,
  });
  
  const changeModules = (newModules: Modules | SubModules[]) => {
    const newSection = { ...props, modules: newModules };
    App.changeFooterHeader(typeFH.Header, newSection);
  };

  const { drop } = CustomDropHook({ changeModules, modules });

  const setTarget = () => {
    changeTarget({ options, name, id, namePrivate }, { changeOptions });
  };


  const changeOptions = ({ options, name }: ChangeOptionsProp) => {
    const newElem = {
      ...props,
      name: name ? name : props.name,
      options: options ? options : props.options,
    };
    App.changeFooterHeader(typeFH.Header, newElem);
  };
  return (
    <BlockEmpty
      ref={(node: HTMLButtonElement) => drag(drop(node))}
      isDragging={isDragging}
    >
      <HeaderConstructor {...options} onClick={() => setTarget()}>
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
      </HeaderConstructor>
    </BlockEmpty>
  );
});
