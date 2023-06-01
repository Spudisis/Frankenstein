import { type ScreenAddElemeny } from 'src/domains'

export interface DropHook {
  dropFunc?: (item: ScreenAddElemeny) => void
  MoveCardFunc: any
  elem: ScreenAddElemeny
  FindIndex: any
  ItemAccess?: any
}
