import { observer } from "mobx-react-lite";
import { changeTarget } from "../../../../components";
import React from "react";
import { ContentProp, ContentWrapper } from "../../../../UI/SideBar/Content/Content";
import App, { Module, ScreenMas, SectionEnum } from "../../../../store/Application";
import { Details } from "../../../../UI";
import { HeaderFooter } from "../HeaderFooter/HeaderFooter";

export const Content = observer(({ overflow }: Pick<ContentProp, "overflow">) => {
  

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
        >
          <>
            {elem.modules &&
              elem.modules.map((module: Module | undefined) => {
                if (typeof module !== "undefined")
                  return (
                    <Details
                      namePrivate={module.namePrivate}
                      id={module.id}
                      name={module.name}
                      key={module.id}
                      click={changeTarget}
                      options={module.options}
                      parent={elem.id}
                      last={true}
                      active={module.id === target.id}
                      nesting={2}
                    >
                      <></>
                    </Details>
                  );
              })}
          </>
        </Details>
      );
    });

  return (
    <ContentWrapper overflow={overflow}>
      <div>
        {Object.keys(App.ApplicationFooter).length !== 0 && (
          <HeaderFooter data={App.ApplicationFooter} handleChangeTarget={changeTarget} target={target} />
        )}
      </div>
      <div>
        {Object.keys(App.ApplicationHeader).length !== 0 && (
          <HeaderFooter data={App.ApplicationHeader} handleChangeTarget={changeTarget} target={target} />
        )}
      </div>

      {
        <Details
          namePrivate={"Screens"}
          name="Screens"
          click={changeTarget}
          options={App.ApplicationScreens}
          nesting={0}
        >
          {ScreensOptions}
        </Details>
      }
    </ContentWrapper>
  );
});
