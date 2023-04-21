import { observer } from "mobx-react-lite";
import React from "react";
import { FindComponent } from "../../modules/ApplicationWrapper/Components/FindComponent/FindComponent";
import { ScreenMas } from "../../store/types/ApplicationTypes";

export const MainConstructor = observer((elem: ScreenMas) => {
  const { id, modules } = elem;

  return (
    <div>
      <FindComponent modules={modules} parent={id} />
    </div>
  );
});
