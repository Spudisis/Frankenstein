import React from "react";

import { Pictures } from "../Pictures";
import { CustomDragLayer } from "src/components/CustomDragNDrop/CustomDragLayer";
import { Pictures as PicturesStore } from "../../store/store";
import { MasType } from "../../RightSideBar.constant";

export const CreateStoreType = React.memo(() => {
  return (
    <>
      <CustomDragLayer />
      {MasType.map((elem) => {
        const store = new PicturesStore();
        return <Pictures type={elem} key={elem} store={store} />;
      })}
    </>
  );
});
