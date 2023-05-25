import { observer } from "mobx-react-lite";
import React from "react";
import { Details, SidebarName } from "src/UI";
import {
  ChangeOptionsProp,
  Modules,
  ScreenMas,
  SubModules,
  typeFH,
} from "src/domains";
import App from "src/store/Application";
import { changeTarget } from "src/components";
import { HeaderFooter } from "../HeaderFooter/HeaderFooter";
import { LayoutList } from "../LayoutList";

export const ListItems = observer(() => {
  const target = App.target;
  const AppScreens = App.ApplicationScreens;
  const ScreensOptions =
    AppScreens &&
    AppScreens.map((elem: ScreenMas) => {
      const changeModules = (modules: any) => {
        const newScreen = { ...elem, modules: modules };
        App.changeScreen(newScreen);
      };
      const changeOptionsF = ({ options, name }: ChangeOptionsProp) => {
        const newElem = {
          ...elem,
          name: name ? name : elem.name,
          options: options ? options : elem.options,
        };
        App.changeScreen(newElem);
      };

      return (
        <Details
          name={elem.name}
          id={elem.id}
          key={elem.id}
          namePrivate={elem.namePrivate}
          click={() => changeTarget(elem, { changeOptions: changeOptionsF })}
          options={elem.options}
          active={elem.id === target.id}
          nesting={1}
          last={
            (elem.modules && elem.modules.length > 0) ||
            (elem.uncommonFooter && elem.uncommonFooter.id) ||
            (elem.uncommonHeader && elem.uncommonHeader.id)
              ? false
              : true
          }
        >
          <>
            {elem.uncommonFooter &&
              Object.keys(elem.uncommonFooter).length !== 0 &&
              elem.uncommonFooter.id && (
                <HeaderFooter
                  data={elem.uncommonFooter}
                  handleChangeTarget={changeTarget}
                  target={target}
                  parent={typeFH.Footer}
                  nesting={2}
                  screenId={elem.id}
                />
              )}
            {elem.uncommonHeader &&
              Object.keys(elem.uncommonHeader).length !== 0 &&
              elem.uncommonHeader.id && (
                <HeaderFooter
                  data={elem.uncommonHeader}
                  handleChangeTarget={changeTarget}
                  target={target}
                  parent={typeFH.Header}
                  nesting={2}
                  screenId={elem.id}
                />
              )}
            {
              <LayoutList
                target={target}
                subModule={elem}
                changeTarget={changeTarget}
                nesting={2}
                changeModules={changeModules}
              />
            }
          </>
        </Details>
      );
    });

  return (
    <>
      <SidebarName>Layout</SidebarName>
      <div>
        {App.ApplicationFooter.id && (
          <HeaderFooter
            screenId=""
            data={App.ApplicationFooter}
            handleChangeTarget={changeTarget}
            target={target}
            parent={typeFH.Footer}
          />
        )}
      </div>
      <div>
        {App.ApplicationHeader.id && (
          <HeaderFooter
            screenId=""
            data={App.ApplicationHeader}
            handleChangeTarget={changeTarget}
            target={target}
            parent={typeFH.Header}
          />
        )}
      </div>

      {ScreensOptions && (
        <Details
          namePrivate={"Screens"}
          name="Screens"
          click={() => console.log("")}
          options={App.ApplicationScreens}
          nesting={0}
        >
          {ScreensOptions}
        </Details>
      )}
    </>
  );
});
