import React, { type MouseEvent } from 'react'
import { ModalStyled, Wrapper, Content } from './ModalChooseTargetScreenHF.styles'
import { createPortal } from 'react-dom'
import { TestStore } from '../../store'
import { DefaultButton } from 'src/UI'

export const ModalChooseTargetScreenHF = () => {
  const ref = React.useRef<HTMLDivElement>(null)

  const onClickModal = (e: MouseEvent<HTMLDivElement>) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      return (TestStore.openModalChooseHFScreen = false)
    }
    return null
  }

  return (
    <>
      {createPortal(
        <Wrapper onClick={onClickModal}>
          <ModalStyled ref={ref}>
            <p>Please choose how you want to add the item: </p>
            <Content>
              <DefaultButton
                padding1800="5px 10px"
                padding="5px 10px"
                margin="0px"
                text={'Add to this screen'}
                onClick={() => {
                  TestStore.setHFtoThisScreen()
                }}
              />
              <DefaultButton
                padding1800="5px 10px"
                padding="5px 10px"
                margin="0px"
                text={'Add to all'}
                onClick={() => {
                  TestStore.setHFtoAll()
                }}
              />
            </Content>
          </ModalStyled>
        </Wrapper>,
        document.body
      )}
    </>
  )
}
