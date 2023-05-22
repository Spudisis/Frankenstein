export type PropsInput<K extends keyof TypesStyles> = {
  label: string;
  typeInput?: string;
  property: K;
};
export type InputStyles = {
  value: TypesStyles;
  onChange: <T extends TypesStyles, K extends keyof T>(
    value: T[K],
    property: K
  ) => void;
};
export type TypesStyles = {
  borderRadius: string;
  height: string;
  backgroundColor: string;
  padding: string;
  color: string;
  margin: string;
  name: string;
  width: string;
  nameModule: string;
  display?: string;
};
