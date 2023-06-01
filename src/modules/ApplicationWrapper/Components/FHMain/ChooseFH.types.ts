import { type ConnectDropTarget } from 'react-dnd'
import { type FHObject, type typeFH } from 'src/domains'

export interface ChooseFHType {
  elemScreenFh?: null | {} | FHObject
  screenId: string
  dropHook: ConnectDropTarget
  elemFH: FHObject
  typeFH: typeFH
}

export interface ReturnChosenFHType {
  elem: FHObject
  screenId: string
  dropHook: ConnectDropTarget
  type: typeFH
}
