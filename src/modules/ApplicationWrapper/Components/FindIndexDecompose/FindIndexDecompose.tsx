import React from 'react'
import { type Module, type SubModules } from 'src/domains'
import { type FindIndexPropComponent } from './FindIndexDecompose.types'

export const FindIndexDecompose = ({ modules }: FindIndexPropComponent) => {
  const FindIndex = React.useCallback(
    (id: string) => {
      if (!modules) {
        throw new Error('Нет скрина или модуля')
      }

      const card = modules.filter((c: Module | undefined | SubModules) => typeof c !== 'undefined' && c.id === id)[0]
      if (card) {
        return {
          card,
          index: modules.indexOf(card),
          id
        }
      }

      return null
    },
    [modules]
  )
  return { FindIndex }
}
