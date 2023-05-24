export type PropsInput<T> = {
  label: string;
  typeInput?: string;
  property: keyof T;
};
export type InputStyles<T> = {
  value: T;
  onChange: (value: T[keyof T], property: keyof T) => void;
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
  display: string;
};
