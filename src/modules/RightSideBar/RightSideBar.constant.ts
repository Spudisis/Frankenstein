import { ItemTypesDND } from "src/components/CustomDragNDrop/CustomDNDHook";

export const MasType = [
  ItemTypesDND.PicturesHeader,
  ItemTypesDND.PicturesFooter,
  ItemTypesDND.PicturesButton,
  ItemTypesDND.PicturesWrapper,
  ItemTypesDND.PicturesText,
];

export const SelectValues = MasType.map((elem) => {
  return { value: elem, label: elem };
});
