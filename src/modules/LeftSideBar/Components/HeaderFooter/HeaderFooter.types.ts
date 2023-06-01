import type { ChangeTargetType, FHObject, Module, ParentElem, typeFH } from 'src/domains'

export interface Props {
  data: FHObject
  handleChangeTarget: ({ obj, changeOptions }: ChangeTargetType) => void
  target: Module & ParentElem
  parent: typeFH
  screenId?: string
  nesting?: number
}
