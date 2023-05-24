import React from "react";
import {
  FHObject,
  Module,
  Modules,
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

import { CustomDropHook } from "../customDropHook";

type Prop = FHObject & { parent?: typeFH | string };

export const MainHeader = observer((props: Prop) => {
  const { id, options, modules, namePrivate, name } = props as Required<Prop>;
  const deleteItemFunc = ({ id }: { id: string }) => {
    App.changeFooterHeader(typeFH.Header, {});
  };
  const { drag, isDragging } = CustomDNDHook({
    name: ItemTypesDND.Header,
    options: props,
    deleteItemFunc,
  });

  const changeModules = (newModules: Modules | SubModules[]) => {
    const newSection = { ...props, modules: newModules };
    App.changeFooterHeader(typeFH.Header, newSection);
  };

  const newModuleDrop = (newModule: SubModules | Module) => {
    const AppHeader = App.ApplicationHeader;
    App.changeFooterHeader(typeFH.Header, {
      ...AppHeader,

      modules: [...(AppHeader.modules ? AppHeader.modules : []), newModule],
    });
  };

  const { drop } = CustomDropHook({ newModuleDrop });

  const setTarget = () => {
    changeTarget({ options, name, id, namePrivate }, { changeOptions });
  };

  const changeOptions = (propOptions: ChangeOptionsProp) => {
    const newElem = {
      ...props,
      name: propOptions.name ? propOptions.name : name,
      options: propOptions.options ? propOptions.options : options,
    };
    App.changeFooterHeader(typeFH.Header, newElem);
  };

  let moduleProp = modules as Module[];
  return (
    <BlockEmpty
      ref={(node: HTMLButtonElement) => drag(drop(node))}
      isDragging={isDragging}
    >
      <HeaderConstructor {...options} onClick={() => setTarget()}>
        <FindComponent
          modules={moduleProp}
          parent={props.parent}
          changeModules={changeModules}
        />
      </HeaderConstructor>
    </BlockEmpty>
  );
});
