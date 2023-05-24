export type PropsInput<T> = {
  label: string;
  typeInput?: string;
  property: keyof T;
};
export type InputStyles<T> = {
  value: T;
  onChange: (value: T[keyof T], property: keyof T) => void;
};

export type SelectValues = {
  readonly value: string;
  readonly label: string;
};

export type Options = {
  options: SelectValues[];
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
  fontSize: string;
  justifyContent: string;
  alignItems: string;
  gridTemplateColumns: string;
  gridColumnGap: string;
  gridRowGap: string;
  actions: Actions;
};

export type Actions = {
  name: string;
  options: {
    screenId: string;
  };
};

enum AlignItemsType {
  "center",
}

enum JustifyContentType {
  "center",
  "space-between",
  "space-evenly",
}
