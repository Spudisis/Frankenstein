export interface PropsInput<T> {
  label: string
  typeInput?: string
  property: keyof T
}
export interface InputStyles<T> {
  value: T
  onChange: (value: T[keyof T], property: keyof T) => void
}

export interface SelectValues {
  readonly value: string
  readonly label: string
}

export interface Options {
  options: SelectValues[]
}

export type TypesStyles = {
  borderRadius: string
  height: string
  backgroundColor: string
  padding: string
  color: string
  margin: string
  name: string
  width: string
  nameModule: string
  border: string

  fontSize: string

  textAlign: string
  scrollable: string

  actions: Actions
} & TypeDisplayOptions

export interface TypeDisplayOptions {
  display: string
  justifyContent: string
  alignItems: string
  flexDirection: string
  gridTemplateColumns: string
  gridColumnGap: string
  gridRowGap: string
}

export interface Actions {
  name: string
  options: {
    screenId: string
  }
}

enum AlignItemsType {
  'center'
}

enum JustifyContentType {
  'center',
  'space-between',
  'space-evenly'
}
