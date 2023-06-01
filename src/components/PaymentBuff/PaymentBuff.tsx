import React from 'react'
import { type BuffType } from './PaymentBuff.types'
import { Grid } from './PaymentBuff.styles'
import { Buff } from './PaymentBuff.constant'

import { BuffElem } from '../PaymentBuffElem'
export const PaymentBuff = ({ tier }: BuffType) => {
  return (
    <Grid>
      {Buff.map((elem) => {
        if (elem.access.includes(tier)) return <BuffElem key={elem.name} name={elem.name} access={true} />
        return <BuffElem key={elem.name} name={elem.name} access={false} />
      })}
    </Grid>
  )
}
