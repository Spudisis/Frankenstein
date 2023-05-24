import { observer } from "mobx-react-lite";
import React from "react";

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
import { CustomDropHook } from "../customDropHook";
import { StyledFooter } from "./MainFooter.styles";

type Prop = FHObject & { parent?: typeFH | string };

export const MainFooter = observer((props: Prop) => {
  const { id, options, modules, namePrivate, name } = props as Required<Prop>;

  const deleteItemFunc = ({ id }: { id: string }) => {
    App.changeFooterHeader(typeFH.Footer, {});
  };

  const { drag, isDragging } = CustomDNDHook({
    name: ItemTypesDND.Footer,
    options: props,
    deleteItemFunc,
  });

  const setTarget = () => {
    changeTarget({ options, name, id, namePrivate }, { changeOptions });
  };

  const changeModules = (newModules: Modules | SubModules[]) => {
    const newSection = { ...props, modules: newModules };

    App.changeFooterHeader(typeFH.Footer, newSection);
  };

  const newModuleDrop = (newModule: SubModules | Module) => {
    const AppFooter = App.ApplicationFooter;
    App.changeFooterHeader(typeFH.Footer, {
      ...AppFooter,

      modules: [...(AppFooter.modules ? AppFooter.modules : []), newModule],
    });
  };

  const { drop } = CustomDropHook({ newModuleDrop });

  const changeOptions = (propOptions: ChangeOptionsProp) => {
    const newElem = {
      ...props,
      name: propOptions.name ? propOptions.name : name,
      options: propOptions.options ? propOptions.options : options,
    };
    App.changeFooterHeader(typeFH.Footer, newElem);
  };

  let moduleProp = modules as Module[];

  return (
    <BlockEmpty
      ref={(node: HTMLButtonElement) => drag(drop(node))}
      isDragging={isDragging}
    >
      <StyledFooter {...options} onClick={() => setTarget()}>
        <FindComponent
          modules={moduleProp}
          parent={props.parent}
          changeModules={changeModules}
        />
      </StyledFooter>
    </BlockEmpty>
  );
});
