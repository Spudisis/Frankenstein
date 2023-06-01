import React from 'react'
import { HeaderOptionsInput } from 'src/UI'
import { SketchPicker } from 'react-color'
import { type Hex, type WheelObject } from './InputColorWheel.types'
import { WheelButton, WrapperWheel } from './InputColorWheel.styles'
import { type InputStyles, type PropsInput } from '../Options.types'

export const InputColorWheel = <T,>({ value, onChange, label, property }: InputStyles<T> & PropsInput<T>) => {
  const [open, setOpen] = React.useState(false)
  const WheelRef = React.useRef<HTMLDivElement>(null)

  const onClickModal = (e: globalThis.MouseEvent) => {
    if (WheelRef.current && !WheelRef.current.contains(e.target as Node)) {
      setOpen(false)
      return
    }
    return null
  }
  React.useEffect(() => {
    document.body.addEventListener('click', onClickModal)
    return () => {
      document.body.removeEventListener('click', onClickModal)
    }
  }, [])

  return (
    <div ref={WheelRef}>
      <HeaderOptionsInput>
        <label>{label}</label>
        <WheelButton
          bgcColor={value[property] as Hex}
          onClick={() => {
            setOpen(!open)
          }}
        ></WheelButton>
        <>
          {open && (
            <>
              <WrapperWheel>
                <SketchPicker
                  color={value}
                  onChange={(e: WheelObject) => {
                    onChange(e.hex as T[keyof T], property)
                  }}
                />
              </WrapperWheel>
            </>
          )}
        </>
      </HeaderOptionsInput>
    </div>
  )
}
