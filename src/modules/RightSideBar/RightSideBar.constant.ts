import { CreateMasItemTypesDND } from "src/components/CustomDragNDrop/CustomDNDHook";

export const MasType = CreateMasItemTypesDND();

export const SelectValues = MasType.map((elem) => {
  return { value: elem, label: elem };
});
