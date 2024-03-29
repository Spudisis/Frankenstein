import React from 'react'
import { TextStyled } from './Text.styles'
import { type ChangeOptionsProp, type DeleteFuncType, type Module, type ParentParent } from 'src/domains'

import { changeTarget } from 'src/components'
import { CustomDragHook } from '../../customDragHook'
import { CustomDropHook } from '../../customDropHook'
import { type PropsDNDHook } from 'src/components/CustomDragNDrop/CustomDNDHook.types'

export const Text = ({
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
    newModules(newElem)
  }

  const { isDragging, drag } = CustomDragHook({
    elem,
    FindIndex,
    parent,
    MoveCardFunc,
    deleteItemFunc,
    typeDrag: 'Text'
  })

  const { drop } = CustomDropHook({
    MoveCardFunc,
    elem,
    FindIndex
  })

  return (
    <TextStyled
      ref={(node: HTMLButtonElement) => drag(drop(node))}
      isDragging={isDragging}
      {...elem.options}
      onClick={(e: MouseEvent) => {
        handleSetTarget(e)
      }}
    >
      {elem.options.name ? elem.options.name : ''}
    </TextStyled>
  )
}
