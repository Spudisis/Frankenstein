import React from 'react'
import s from './Loader.module.scss'
import { Bgc } from 'src/UI'
export const Loader = () => {
  return (
    <Bgc>
      <div className={s.window}>
        <div className={s.lds_dual_ring}></div>
      </div>
    </Bgc>
  )
}
