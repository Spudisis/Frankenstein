import { observer } from "mobx-react-lite";
import React from "react";
import {
  Module,
  Modules,
  SubModules,
  typeFH,
} from "src/domains/ApplicationTypes";
import { Details } from "src/UI";
import { Props } from "./HeaderFooter.types";
import App from "src/store/Application";
import { LayoutList } from "../LayoutList";
import { ChangeOptionsProp } from "src/domains";

export const HeaderFooter = observer(
  ({
    data,
    handleChangeTarget,
    target,
    parent,
    screenId,
    nesting = 0,
  }: Props) => {
    const changeOptions = ({ options, name }: ChangeOptionsProp) => {
      const newElem = {
        ...data,
        name: name ? name : data.name,
        options: options ? options : data.options,
      };
      console.log(newElem);
      if (screenId) {
        return App.changeFooterHeaderScreen(parent, newElem, screenId);
      }
      App.changeFooterHeader(parent, newElem);
    };

    const changeModules = (newModules: Modules | SubModules[]) => {
      console.log(newModules);
      const newSection = { ...data, modules: newModules };
      if (screenId) {
        return App.changeFooterHeaderScreen(parent, newSection, screenId);
      }
      App.changeFooterHeader(parent, newSection);
    };

    return (
      <>
        <Details
          namePrivate={data.namePrivate ? data.namePrivate : "Нет namePrivate"}
          name={data.name ? data.name : "Нет name"}
          click={() =>
            handleChangeTarget({
              obj: data as Module,
              changeOptions: changeOptions,
            })
          }
          options={data.options}
          active={data.id === target.id}
          last={data.modules && data.modules.length !== 0 ? false : true}
          id={data.id}
          nesting={nesting}
        >
          <>
            <LayoutList
              target={target}
              subModule={data}
              changeTarget={handleChangeTarget}
              nesting={nesting + 1}
              changeModules={changeModules}
            />
          </>
        </Details>
      </>
    );
  }
);
