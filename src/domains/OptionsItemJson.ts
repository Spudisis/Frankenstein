export interface TypesStyles {
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
  display: string
  fontSize: string
  textAlign: string
  scrollable: string
  justifyContent: string
  alignItems: string
  flexDirection: string
  gridTemplateColumns: string
  gridColumnGap: string
  gridRowGap: string
  actions: Actions
}

export interface Actions {
  name: string
  options: {
    screenId: string
  }
}

export type WrapperStyles = Omit<
TypesStyles,
'name' | 'fontSize' | 'actions' | 'textAlign'
>
