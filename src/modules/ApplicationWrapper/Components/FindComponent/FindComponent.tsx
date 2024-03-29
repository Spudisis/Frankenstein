import React from 'react'

import { type Module, type ParentParent, type SubModules } from 'src/domains/ApplicationTypes'
import { Button, Text } from '../Elements'
import { type PropsDNDHook } from 'src/components/CustomDragNDrop/CustomDNDHook.types'
import { WrapperCustom } from '../WrapperCustom'
import { FindIndexDecompose } from '../FindIndexDecompose'
import { MoveCardDecompose } from '../MoveCardDecompose'

export const FindComponent = ({
  modules,
  parent,
  ParentParent,
  changeModules
}: {
  modules: Module[] | SubModules[]
  changeModules?: (modules: any) => void
} & Pick<PropsDNDHook, 'parent'> &
Pick<ParentParent, 'ParentParent'>) => {
  const { FindIndex } = FindIndexDecompose({ modules })

  const { MoveCardFunc } = MoveCardDecompose({ modules, changeModules })

  const newModules = (changeModule: any, id?: string) => {
    const newModules = modules.map((elem) => {
      if (elem.id === changeModule.id) {
        return changeModule
      }
      return elem
    })
    console.log(newModules)
    changeModules && changeModules(newModules)
  }
  const deleteItemFunc = ({ id }: { id: string }) => {
    const newModules = modules.filter((elem) => elem.id !== id)
    changeModules && changeModules(newModules)
  }

  return (
    <>
      {modules &&
        modules.map((elem: Module | SubModules | undefined) => {
          if (typeof elem !== 'undefined') {
            if (elem.namePrivate === 'Wrapper') {
              const obj = elem as SubModules
              return (
                <WrapperCustom
                  elem={obj}
                  MoveCardFunc={MoveCardFunc}
                  FindIndex={FindIndex}
                  key={elem.id}
                  parent={parent}
                  newModules={newModules}
                  deleteItemFunc={deleteItemFunc}
                />
              )
            }
            if (elem.namePrivate === 'Button') {
              return (
                <Button
                  MoveCardFunc={MoveCardFunc}
                  FindIndex={FindIndex}
                  elem={elem}
                  key={elem.id}
                  parent={parent}
                  ParentParent={ParentParent}
                  newModules={newModules}
                  deleteItemFunc={deleteItemFunc}
                />
              )
            }
            if (elem.namePrivate === 'Text') {
              return (
                <Text
                  MoveCardFunc={MoveCardFunc}
                  FindIndex={FindIndex}
                  elem={elem}
                  key={elem.id}
                  parent={parent}
                  ParentParent={ParentParent}
                  newModules={newModules}
                  deleteItemFunc={deleteItemFunc}
                />
              )
            }
          }
        })}
    </>
  )
}
