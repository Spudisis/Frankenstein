import React from 'react'
import { type ChangeOptions, type Module } from 'src/domains'
import { type TypesStyles } from '../Options.types'
import { Input } from '../Input'
import App from 'src/store/Application'
import { DefaultButton } from 'src/UI'
import { observer } from 'mobx-react-lite'

type ScreenStyles = Pick<TypesStyles, 'nameModule'>

export const ScreenOptions = observer(
  ({
    options,
    name,
    namePrivate,
    id,
    changeOptions,
  }: Pick<Module, 'options' | 'name' | 'namePrivate' | 'id'> & {
    changeOptions: ChangeOptions
  }) => {
    const [styles, setStyles] = React.useState<ScreenStyles>({
      nameModule: name || '',
    })
    const ChangeStyles = <T,>(value: T[keyof T], property: keyof T) => {
      setStyles({ ...styles, ...{ [property]: value } })
    }

    React.useEffect(() => {
      changeOptions({ options: styles, name: styles.nameModule })
      // для того тобы актуальный таргет был
      App.setTarget({
        obj: { options: styles, name: styles.nameModule, namePrivate, id },
        changeOptions,
      })
    }, [changeOptions, styles])

    return (
      <>
        <Input<ScreenStyles>
          label="Название:"
          value={styles}
          onChange={ChangeStyles}
          property="nameModule"
          typeInput="text"
        />
        <DefaultButton
          width="100%"
          margin="10px 0px"
          padding1800="10px"
          fontSize={20}
          text={'Удалить экран'}
          onClick={() => {
            App.deleteScreen(id)
          }}
        />
      </>
    )
  }
)
