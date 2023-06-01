import React from 'react'
import { Pictures, CustomDragLayer } from '../'
import { Pictures as PicturesStore } from '../../store'
import { MasType } from '../../RightSideBar.constant'

const CreateStoreTypeComponent = () => {
  return (
    <>
      <CustomDragLayer />
      {MasType.map((elem) => {
        const store = new PicturesStore()
        return <Pictures type={elem} key={elem} store={store} />
      })}
    </>
  )
}

export const CreateStoreType = React.memo(CreateStoreTypeComponent)
