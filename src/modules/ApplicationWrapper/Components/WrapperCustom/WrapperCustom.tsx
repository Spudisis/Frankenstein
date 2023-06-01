import React from 'react'
import {
  type ScreenAddElemeny,
  type Module,
  type SubModules,
  type Modules,
  type ChangeOptionsProp,
  DeleteFuncType,
  type WrapperStyles
} from 'src/domains'
import { FindComponent } from '../FindComponent/FindComponent'
import { WrapperStyledDiv } from './WrapperCustom.styles'
import { type WrapperCustomT } from './WrapperCustom.types'
import { CreateId, changeTarget } from 'src/components'

import { TestStore } from '../../store'
import { CustomDragHook } from '../customDragHook'
import { CustomDropHook } from '../customDropHook'
import { ItemTypesDNDPictures } from 'src/constants'

export const WrapperCustom = ({
  elem,
  MoveCardFunc,
  FindIndex,
  parent,
  newModules,
  deleteItemFunc
}: WrapperCustomT) => {
  const { options, modules, id } = elem
  const module = modules as Module[]

  const handleSetTarget = (e: React.MouseEvent<HTMLDivElement>) => {
    const { options, id, namePrivate, name, modules } = elem
    changeTarget({
      obj: { options, name, id, namePrivate, modules },
      changeOptions
    })
    e.stopPropagation()
  }

  const { drag } = CustomDragHook({
    elem,
    parent,
    FindIndex,
    MoveCardFunc,
    typeDrag: 'Wrapper',
    deleteItemFunc
  })

  const dropFunc = (item: ScreenAddElemeny) => {
    addModule({ ...item, id: CreateId() })
  }
  const addModule = (newModule: Module | SubModules) => {
    console.log(elem.modules!.length)
    const newModules = [...(elem.modules ? elem.modules : []), newModule]
    console.log(newModules.length)
    changeModules && changeModules(newModules)
  }
  const { drop } = CustomDropHook({
    dropFunc,
    MoveCardFunc,
    elem,
    FindIndex,
    ItemAccess: [
      ItemTypesDNDPictures.PicturesButton,
      ItemTypesDNDPictures.PicturesWrapper,
      ItemTypesDNDPictures.PicturesText
    ]
  })

  const changeOptions = ({ options, name, scrollable }: ChangeOptionsProp) => {
    const newElem = {
      ...elem,
      name: name || elem.name,
      options: options || elem.options,
      scrollable: scrollable || elem.scrollable
    }

    newModules(newElem)
  }

  const changeModules = (newEl: SubModules[] | Modules) => {
    const newElem = {
      ...elem,

      modules: newEl
    }

    console.log(newElem.id)
    newModules(newElem)
  }

  return (
    <>
      <WrapperStyledDiv
        ref={(node: HTMLDivElement) => drag(drop(node))}
        {...(options as WrapperStyles)}
        onClick={handleSetTarget}
      >
        <FindComponent modules={module} parent={parent as string} ParentParent={id} changeModules={changeModules} />
      </WrapperStyledDiv>
    </>
  )
}
