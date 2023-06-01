import React from 'react'
import { Bgc } from '../../UI'
import { Hello } from './components/Hello'
import { PhoneImg } from './components/PhoneImg'

export const StartModule = () => {
  return (
    <Bgc>
      <PhoneImg />
      <Hello />
    </Bgc>
  )
}
