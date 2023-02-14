import { observer } from "mobx-react-lite";
import React from "react";
import { ContentProp, ContentWrapper } from "../../../../UI/SideBar/Content/Content";
import ApplicationData, { Module, ScreenMas, SectionEnum } from "../../../../store/Application";
import { Details } from "../../../../UI";
import { HeaderFooter } from "../Headerfooter.tsx/HeaderFooter";

export const Content = observer(({ overflow }: ContentProp) => {
  const handleChangeTarget = (obj: Module) => {
    ApplicationData.setTarget(obj);

    ApplicationData.section !== SectionEnum.options && ApplicationData.changeSection(SectionEnum.options);
  };

  const ScreensOptions =
    ApplicationData.ApplicationScreens &&
    ApplicationData.ApplicationScreens.map((elem: ScreenMas) => {
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
        {Object.keys(ApplicationData.ApplicationFooter).length !== 0 && (
          <HeaderFooter data={ApplicationData.ApplicationFooter} handleChangeTarget={handleChangeTarget} />
        )}
      </div>
      <div>
        {Object.keys(ApplicationData.ApplicationHeader).length !== 0 && (
          <HeaderFooter data={ApplicationData.ApplicationHeader} handleChangeTarget={handleChangeTarget} />
        )}
      </div>

      {
        <Details
          namePrivate={"Screens"}
          name="Screens"
          click={handleChangeTarget}
          options={ApplicationData.ApplicationScreens}
        >
          {ScreensOptions}
        </Details>
      }
    </ContentWrapper>
  );
});
