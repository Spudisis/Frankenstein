import React from "react";
import { FHObject, Module, Modules, SubModules, typeFH } from "src/domains";
import { observer } from "mobx-react-lite";
import { CustomDNDHook, changeTarget } from "src/components";
import { FindComponent } from "../FindComponent/FindComponent";
import { BlockEmpty } from "src/UI";
import { ItemTypesDND } from "src/components/CustomDragNDrop/CustomDNDHook";
import App from "src/store/Application";
import { ChangeOptionsProp } from "src/domains";
import { CustomDropHook } from "./customDropHook";
import { HeaderConstructor, StyledFooter } from "./FHMain.styles";

type Prop = FHObject & { parent: typeFH; idScreen?: string };

export const FHMain = observer((props: Prop) => {
  const { id, options, modules, namePrivate, name } = props as Required<Prop>;
  const { idScreen, parent } = props;
  console.log("idScreen: " + idScreen);
  const deleteItemFunc = ({ id }: { id: string }) => {
    console.log("idScreen deleteItemFunc: " + idScreen);
    if (idScreen) {
      return App.changeFooterHeaderScreen(parent, {}, idScreen);
    }
    App.changeFooterHeader(parent, {});
  };
  const { drag, isDragging } = CustomDNDHook({
    name: parent === typeFH.Header ? ItemTypesDND.Header : ItemTypesDND.Footer,
    options: props,
    deleteItemFunc,
  });

  const changeModules = (newModules: Modules | SubModules[]) => {
    const newSection = { ...props, modules: newModules };
    if (idScreen) {
      return App.changeFooterHeaderScreen(parent, newSection, idScreen);
    }
    App.changeFooterHeader(parent, newSection);
  };

  const newModuleDrop = (newModule: SubModules | Module) => {
    if (idScreen) {
      const AppScreens = App.ApplicationScreens;
      const filter = AppScreens?.filter((elem) => elem.id === idScreen)[0];
      const filterUncommon =
        parent === typeFH.Header
          ? filter?.uncommonHeader
          : filter?.uncommonFooter;
      if (filter && filterUncommon) {
        return App.changeFooterHeaderScreen(
          parent,
          {
            ...filterUncommon,
            modules: [
              ...(filterUncommon.modules ? filterUncommon.modules : []),
              newModule,
            ],
          },
          idScreen
        );
      }
      return;
    }
    const AppHF =
      parent === typeFH.Header ? App.ApplicationHeader : App.ApplicationFooter;
    App.changeFooterHeader(parent, {
      ...AppHF,

      modules: [...(AppHF.modules ? AppHF.modules : []), newModule],
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
    if (idScreen) {
      return App.changeFooterHeaderScreen(parent, newElem, idScreen);
    }
    App.changeFooterHeader(parent, newElem);
  };

  let moduleProp = modules as Module[];
  return (
    <BlockEmpty
      ref={(node: HTMLButtonElement) => drag(drop(node))}
      isDragging={isDragging}
    >
      {parent === typeFH.Header ? (
        <HeaderConstructor {...options} onClick={() => setTarget()}>
          <FindComponent
            modules={moduleProp}
            parent={props.parent}
            changeModules={changeModules}
          />
        </HeaderConstructor>
      ) : (
        <StyledFooter {...options} onClick={() => setTarget()}>
          <FindComponent
            modules={moduleProp}
            parent={props.parent}
            changeModules={changeModules}
          />
        </StyledFooter>
      )}
    </BlockEmpty>
  );
});
