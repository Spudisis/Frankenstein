import type { ConnectDropTarget } from 'react-dnd'
import type { DeleteFuncType, typeFH } from 'src/domains'

export interface PropsDNDHook {
  name: string
  options: any
  parent?: string | typeFH
  deleteItemFunc?: DeleteFuncType
}
export type DropDND = [any, ConnectDropTarget]
