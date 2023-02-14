import { observer } from "mobx-react-lite";
import React from "react";
import { ContentProp, ContentWrapper } from "../../../../UI/SideBar/Content/Content";
import App, { Module, ScreenMas, SectionEnum } from "../../../../store/Application";
import { Details } from "../../../../UI";
import { HeaderFooter } from "../HeaderFooter/HeaderFooter";

export const Content = observer(({ overflow }: Pick<ContentProp, "overflow">) => {
  const handleChangeTarget = (obj: Module) => {
    App.setTarget(obj);

    App.section !== SectionEnum.options && App.changeSection(SectionEnum.options);
  };

  const ScreensOptions =
    App.ApplicationScreens &&
    App.ApplicationScreens.map((elem: ScreenMas) => {
      return (
        <Details
          name={elem.name}
          id={elem.id}
          key={elem.id}
          namePrivate={elem.namePrivate}
          click={handleChangeTarget}
          options={elem.options}
        >
          <>
            {elem.modules &&
              elem.modules.map((module: Module | undefined) => {
                if (typeof module !== "undefined")
                  return (
                    <Details
                      namePrivate={elem.namePrivate}
                      id={module.id}
                      name={module.name}
                      key={module.id}
                      click={handleChangeTarget}
                      options={module.options}
                      parent={elem.id}
                      last={true}
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
          <HeaderFooter data={App.ApplicationFooter} handleChangeTarget={handleChangeTarget} />
        )}
      </div>
      <div>
        {Object.keys(App.ApplicationHeader).length !== 0 && (
          <HeaderFooter data={App.ApplicationHeader} handleChangeTarget={handleChangeTarget} />
        )}
      </div>

      {
        <Details
          namePrivate={"Screens"}
          name="Screens"
          click={handleChangeTarget}
          options={App.ApplicationScreens}
        >
          {ScreensOptions}
        </Details>
      }
    </ContentWrapper>
  );
});
