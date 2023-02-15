import { Grid, Pictures } from "../../UI";
import React from "react";
import { CustomDNDHook } from "../CustomDragNDrop/CustomDNDHook";
import { getEmptyImage } from "react-dnd-html5-backend";
import { Picture } from "./Picture";
import { CustomDragLayer } from "../CustomDragNDrop/CustomDragLayer";

export type TypePicture = string;

export const PicturesRows = ({ masImg, type }: { masImg: any[]; type: TypePicture }) => {
  return (
    <>
      <CustomDragLayer />
      <Grid columns="repeat(2, 1fr)" rowGap="10px">
        {masImg.map((elem, index) => {
          return <Picture elem={elem} type={type} key={elem.options.id} />;
        })}
      </Grid>
    </>
  );
};
