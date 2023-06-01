
import { type DeleteFuncType, type Module, type ParentParent, type SubModules } from 'src/domains'
import { type FindIndexFunc } from '../FindIndexDecompose'
import { type ItemType } from 'src/domains/ItemTypesDNDType'
import { type PropsDNDHook } from 'src/components/CustomDragNDrop/CustomDNDHook.types'

export type DragHook = {
  elem: Module | SubModules
  FindIndex: FindIndexFunc
  typeDrag: ItemType | ItemType[]
  MoveCardFunc: any
  deleteItemFunc: DeleteFuncType
} & Partial<Pick<PropsDNDHook, 'parent'>> &
Pick<ParentParent, 'ParentParent'>
