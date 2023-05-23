import React from "react";

import {
  FHObject,
  Module,
  Modules,
  ParentParent,
  SubModules,
} from "src/domains/ApplicationTypes";
import { Button } from "../Elements";
import { PropsDNDHook } from "src/components/CustomDragNDrop/CustomDNDHook";
import App from "src/store/Application";

import update from "immutability-helper";
import { WrapperCustom } from "../WrapperCustom";
import { FindIndexDecompose } from "../FindIndexDecompose";
import { MoveCardDecompose } from "../MoveCardDecompose";

export const FindComponent = ({
  modules,
  parent,
  ParentParent,
  changeModules,
}: {
  modules: Module[] | SubModules[];
  changeModules?: (modules: any) => void;
} & Pick<PropsDNDHook, "parent"> &
  Pick<ParentParent, "ParentParent">) => {
  const { FindIndex } = FindIndexDecompose({ modules });

  const { MoveCardFunc } = MoveCardDecompose({ modules, changeModules });

  const newModules = (changeModule: any, id?: string) => {
    const newModules = modules.map((elem) => {
      if (elem.id === changeModule.id) {
        return changeModule;
      }
      return elem;
    });

    changeModules && changeModules(newModules);
  };

  return (
    <>
      {modules &&
        modules.map((elem: Module | SubModules | undefined) => {
          if (typeof elem !== "undefined") {
            if (elem.namePrivate === "Wrapper") {
              const obj = elem as SubModules;
              return (
                <WrapperCustom
                  elem={obj}
                  MoveCardFunc={MoveCardFunc}
                  FindIndex={FindIndex}
                  key={elem.id}
                  parent={parent}
                  newModules={newModules}
                />
              );
            }
            if (elem.namePrivate === "Button") {
              return (
                <Button
                  MoveCardFunc={MoveCardFunc}
                  FindIndex={FindIndex}
                  elem={elem}
                  key={elem.id}
                  parent={parent}
                  ParentParent={ParentParent}
                  newModules={newModules}
                />
              );
            }
          }
        })}
    </>
  );
};
