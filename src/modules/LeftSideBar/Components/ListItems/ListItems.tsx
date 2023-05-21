import { observer } from "mobx-react-lite";
import React from "react";
import { Details, SidebarName } from "src/UI";
import { Module, ScreenMas, SubModules } from "src/domains";
import App from "src/store/Application";
import { changeTarget } from "src/components";
import { HeaderFooter } from "../HeaderFooter/HeaderFooter";
import { LayoutList } from "../LayoutList";

export const ListItems = observer(() => {
  const target = App.target;

  const ScreensOptions =
    App.ApplicationScreens &&
    App.ApplicationScreens.map((elem: ScreenMas) => {
      return (
        <Details
          name={elem.name}
          id={elem.id}
          key={elem.id}
          namePrivate={elem.namePrivate}
          click={changeTarget}
          options={elem.options}
          active={elem.id === target.id}
          nesting={1}
          last={elem.modules && elem.modules.length > 0 ? false : true}
        >
          {
            <LayoutList
              target={target}
              subModule={elem}
              changeTarget={changeTarget}
              key={elem.id}
              nesting={2}
            />
          }
        </Details>
      );
    });
  return (
    <>
      <SidebarName>Layout</SidebarName>
      <div>
        {App.ApplicationFooter.id && (
          <HeaderFooter
            data={App.ApplicationFooter}
            handleChangeTarget={changeTarget}
            target={target}
          />
        )}
      </div>
      <div>
        {App.ApplicationHeader.id && (
          <HeaderFooter
            data={App.ApplicationHeader}
            handleChangeTarget={changeTarget}
            target={target}
          />
        )}
      </div>

      {ScreensOptions && (
        <Details
          namePrivate={"Screens"}
          name="Screens"
          click={changeTarget}
          options={App.ApplicationScreens}
          nesting={0}
        >
          {ScreensOptions}
        </Details>
      )}
    </>
  );
});
