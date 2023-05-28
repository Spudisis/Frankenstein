import { SelectValues } from "./Options.types";

export const OptionsJustify: SelectValues[] = [
  { value: "center", label: "Center" },
  { value: "space-between", label: "Space between" },
  { value: "space-evenly", label: "Space evenly" },
];

export const OptionsAlign: SelectValues[] = [
  { value: "center", label: "Center" },
  { value: "flex-start", label: "Start" },
  { value: "flex-end", label: "end" },
];

export const OptionsGridColumns: SelectValues[] = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
];

export const OptionFlexDirection: SelectValues[] = [
  { value: "row", label: "row" },
  { value: "column", label: "column" },
];

export const OptionAlignText: SelectValues[] = [
  { value: "start", label: "По левому краю" },
  { value: "end", label: "По правому краю" },
  { value: "center", label: "По центру" },
  { value: "justify", label: "По ширине" },
];

export const OptionsScrollable: SelectValues[] = [
  { value: "true", label: "Yes" },
  { value: "false", label: "No" },
];
