export type TypeInputDisplay<T> = {
  styles: T;
  ChangeStyles: (value: T[keyof T], property: keyof T) => void;
};
