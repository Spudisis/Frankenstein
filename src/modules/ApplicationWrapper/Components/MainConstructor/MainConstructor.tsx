import { observer } from "mobx-react-lite";
import React from "react";

import { ScreenMas, SubModules } from "src/domains/ApplicationTypes";
import { WrapperElem } from "../WrapperElem";
import { FindComponent } from "../FindComponent/FindComponent";

export const MainConstructor = observer((elem: ScreenMas) => {
  const { id, modules } = elem;

  return (
    <div>
      {modules ? (
        <FindComponent modules={modules} parent={id} />
      ) : (
        <div>Нет ничего, см MainCounstructor</div>
      )}
    </div>
  );
});
