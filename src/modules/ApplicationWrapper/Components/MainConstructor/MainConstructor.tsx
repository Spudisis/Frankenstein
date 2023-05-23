import { observer } from "mobx-react-lite";
import React from "react";

import { ScreenMas, SubModules } from "src/domains/ApplicationTypes";
import { WrapperElem } from "../WrapperElem";
import { FindComponent } from "../FindComponent/FindComponent";
import App from "src/store/Application";

export const MainConstructor = observer((elem: ScreenMas) => {
  const { id, modules } = elem;
  const changeModules = (modules: any) => {
    const newScreen = { ...elem, modules: modules };
    App.changeScreen(newScreen);
  };

  return (
    <div>
      {modules ? (
        <FindComponent
          modules={modules}
          parent={id}
          changeModules={changeModules}
        />
      ) : (
        <div>Нет ничего, см MainCounstructor</div>
      )}
    </div>
  );
});
