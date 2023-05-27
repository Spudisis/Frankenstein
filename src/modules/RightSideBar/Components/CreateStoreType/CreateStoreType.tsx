import React from "react";
import { ItemTypesDND } from "src/components/CustomDragNDrop/CustomDNDHook";
import { Pictures } from "../Pictures";
import { CustomDragLayer } from "src/components/CustomDragNDrop/CustomDragLayer";
import { Pictures as PicturesStore } from "../../store/store";

export const CreateStoreType = () => {
  const MasType = [
    ItemTypesDND.PicturesHeader,
    ItemTypesDND.PicturesFooter,
    ItemTypesDND.PicturesButton,
    ItemTypesDND.PicturesWrapper,
    ItemTypesDND.PicturesText,
  ];
  return (
    <>
      <CustomDragLayer />
      {MasType.map((elem) => {
        const store = new PicturesStore();
        return <Pictures type={elem} key={elem} store={store} />;
      })}
    </>
  );
};
