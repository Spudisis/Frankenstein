import { type DeleteFuncType, type Module, type ParentParent } from 'src/domains/ApplicationTypes'
import { StyledButtonFullControlled } from 'src/UI/Button/ButtonFullControlled'

import { changeTarget } from 'src/components'
import { CustomDragHook } from '../../customDragHook'
import { CustomDropHook } from '../../customDropHook'
import { type ChangeOptionsProp } from 'src/domains'
import { type PropsDNDHook } from 'src/components/CustomDragNDrop/CustomDNDHook.types'

export const Button = ({
  elem,
  parent,
  MoveCardFunc,
  FindIndex,
  ParentParent,
  newModules,
  deleteItemFunc
}: { elem: Module, MoveCardFunc: any, FindIndex: any } & Pick<PropsDNDHook, 'parent'> &
Pick<ParentParent, 'ParentParent'> & {
  newModules: (n: any) => void
  deleteItemFunc: DeleteFuncType
}) => {
  const handleSetTarget = (e: MouseEvent) => {
    const { options, id, namePrivate, name } = elem

    changeTarget({ obj: { options, name, id, namePrivate }, changeOptions })
    e.stopPropagation()
  }

  const changeOptions = ({ options, name }: ChangeOptionsProp) => {
    const newElem = {
      ...elem,
      name: name || elem.name,
      options: options || elem.options
    }
    console.log(newElem)
    newModules(newElem)
  }

  const { isDragging, drag } = CustomDragHook({
    elem,
    FindIndex,
    parent,
    MoveCardFunc,
    deleteItemFunc,
    typeDrag: 'Button'
  })

  const { drop } = CustomDropHook({
    MoveCardFunc,
    elem,
    FindIndex
  })

  return (
    <StyledButtonFullControlled
      ref={(node: HTMLButtonElement) => drag(drop(node))}
      isDragging={isDragging}
      {...elem.options}
      onClick={(e: MouseEvent) => {
        handleSetTarget(e)
      }}
    >
      {elem.options.name ? elem.options.name : ''}
    </StyledButtonFullControlled>
  )
}
