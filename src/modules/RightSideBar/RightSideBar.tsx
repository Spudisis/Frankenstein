import React from 'react'
import { ButtonHideSideBar } from 'src/components'
import { SideBar } from 'src/UI'
import { Content } from './Components'
import { observer } from 'mobx-react-lite'

export const RightSideBar = observer(() => {
  const [width, setWidth] = React.useState(350)

  const changeRight = () => {
    width ? setWidth(0) : setWidth(350)
  }

  return (
    <SideBar width={`${width}px`} right="0px">
      <ButtonHideSideBar changeVisible={changeRight} left="-25px" deg={'180deg'} />
      <Content overflow={width ? 'auto' : 'hidden'} />
    </SideBar>
  )
})
