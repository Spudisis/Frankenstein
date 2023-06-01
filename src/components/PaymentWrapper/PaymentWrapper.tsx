import React from 'react'
import { ImageBack, InfoBlock, OverlayStyle, PaymentRoot } from './PaymentWrapper.styles'
import { type WrapperTypes } from './PaymentWrapper.types'

export const PaymentWrapper = ({ selectImage, children }: WrapperTypes) => {
  return (
    <PaymentRoot>
      <ImageBack img={selectImage} />
      <OverlayStyle />
      <InfoBlock>{children}</InfoBlock>
    </PaymentRoot>
  )
}
