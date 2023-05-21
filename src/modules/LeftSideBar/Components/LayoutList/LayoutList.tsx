import React from "react";
import { Details } from "src/UI";
import { SubModules, Module } from "src/domains";
import App from "src/store/Application";
import { NestingLayout } from "./Layout.types";

export const LayoutList = ({
  target,
  subModule,
  changeTarget,
  nesting = 1,
}: NestingLayout) => {
  console.log(nesting, subModule);
  return (
    <>
      {subModule.modules &&
        subModule.modules.map((module: Module | undefined | SubModules) => {
          if (typeof module !== "undefined") {
            return (
              <Details
                namePrivate={module.namePrivate}
                id={module.id}
                name={module.name}
                key={module.id}
                click={changeTarget}
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
                    />
                  )}
                </>
              </Details>
            );
          }
        })}
    </>
  );
};
