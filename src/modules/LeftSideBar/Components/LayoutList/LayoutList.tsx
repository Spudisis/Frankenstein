import { Details } from "src/UI";
import { SubModules, Module, ChangeOptionsProp, Modules } from "src/domains";

import { NestingLayout } from "./Layout.types";
import React from "react";

export const LayoutList = React.memo(
  ({
    target,
    subModule,
    changeTarget,
    nesting = 1,
    changeModules,
  }: NestingLayout) => {
    const changeModulesIn = (changeModule: any) => {
      if (subModule.modules) {
        const newModules = subModule.modules.map(
          (elem: Module | SubModules | undefined) => {
            if (elem) {
              if (elem.id === changeModule.id) {
                return changeModule;
              }
              return elem;
            }
          }
        );
        changeModules(newModules);
      }
    };
    return (
      <>
        {subModule.modules &&
          subModule.modules.map((module: Module | undefined | SubModules) => {
            if (typeof module !== "undefined") {
              //изменение опций, передается в таргет
              const changeOptionsF = ({ options, name }: ChangeOptionsProp) => {
                const newElem = {
                  ...module,
                  name: name ? name : module.name,
                  options: options ? options : module.options,
                };
                changeModulesIn(newElem);
              };
              //замена модуля с новыми опциями

              //создание нового элемента заменяя старые
              const changeFull = (modules: Modules | SubModules[]) => {
                const newElem = {
                  ...module,

                  modules: modules,
                };
                changeModulesIn(newElem);
              };
              return (
                <Details
                  namePrivate={module.namePrivate}
                  id={module.id}
                  name={module.name}
                  key={module.id}
                  click={() =>
                    changeTarget(module, { changeOptions: changeOptionsF })
                  }
                  options={module.options}
                  parent={subModule.id}
                  last={
                    "modules" in module
                      ? !(subModule.modules && subModule.modules.length > 0)
                      : true
                  }
                  active={module.id === target.id}
                  nesting={nesting}
                >
                  <>
                    {"modules" in module && module.modules && (
                      <LayoutList
                        target={target}
                        subModule={module}
                        changeTarget={changeTarget}
                        nesting={nesting + 1}
                        changeModules={changeFull}
                      />
                    )}
                  </>
                </Details>
              );
            }
          })}
      </>
    );
  }
);
