import { observer } from "mobx-react-lite";
import React from "react";
import { FindComponent } from "../../modules/ApplicationWrapper/Components/FindComponent/FindComponent";
import { Module, ScreenMas } from "../../store/Application";
import App from "../../store/Application";
export const MainConstructor = observer((elem: ScreenMas) => {
  const { id, options, modules } = elem;
  
  return (
    <div>
      <FindComponent modules={modules} parent={elem.id} />
    </div>
  );
});
