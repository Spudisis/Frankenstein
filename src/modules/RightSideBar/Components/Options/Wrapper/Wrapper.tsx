import React from 'react'
import { type ChangeOptions, type SubModules, type WrapperStyles } from 'src/domains'
import { Input } from '../Input'
import { InputColorWheel } from '../InputColorWheel'
import { SelectInput } from '../SelectInput'
import { OptionsScrollable } from '../Options.constant'

import App from 'src/store/Application'
import { InputDisplay } from '../InputDisplay/InputDisplay'

export const WrapperOptions = ({
  options,
  name,
  namePrivate,
  id,
  changeOptions,
  modules
}: Pick<SubModules, 'modules' | 'options' | 'name' | 'namePrivate' | 'id'> & {
  changeOptions: ChangeOptions
}) => {
  const [styles, setStyles] = React.useState<WrapperStyles>({
    color: options.color ? options.color : 'black',
    nameModule: name || '',
    borderRadius: options.borderRadius ? options.borderRadius : '5px',
    height: options.height ? options.height : '200px',
    backgroundColor: options.backgroundColor ? options.backgroundColor : '',
    padding: options.padding ? options.padding : '2px',
    margin: options.margin ? options.margin : '0px',
    width: options.width ? options.width : '100%',
    border: options.border ? options.border : 'none',
    display: options.display ? options.display : '',
    flexDirection: options.flexDirection ? options.flexDirection : 'row',
    justifyContent: options.justifyContent ? options.justifyContent : '',
    alignItems: options.alignItems ? options.alignItems : '',
    gridTemplateColumns: options.gridTemplateColumns ? options.gridTemplateColumns : '',
    gridColumnGap: options.gridColumnGap ? options.gridColumnGap : '',
    gridRowGap: options.gridRowGap ? options.gridRowGap : '',
    scrollable: options.scrollable ? options.scrollable : 'false'
  })

  React.useEffect(() => {
    changeOptions({
      options: styles,
      name: styles.nameModule,
      scrollable: styles.scrollable
    })
    App.setTarget({
      obj: {
        options: styles,
        name: styles.nameModule,
        namePrivate,
        id,
        modules
      },
      changeOptions
    })
  }, [changeOptions, styles])

  const ChangeStyles = <T,>(value: T[keyof T], property: keyof T) => {
    setStyles({ ...styles, ...{ [property]: value } })
  }

  return (
    <>
      <Input<WrapperStyles>
        label="Название:"
        value={styles}
        onChange={ChangeStyles}
        property="nameModule"
        typeInput="text"
      />
      <Input<WrapperStyles> label="Высота:" value={styles} onChange={ChangeStyles} property="height" typeInput="text" />
      <Input<WrapperStyles> label="Ширина:" value={styles} onChange={ChangeStyles} property="width" typeInput="text" />
      <InputColorWheel<WrapperStyles>
        value={styles}
        onChange={ChangeStyles}
        label="Цвет фона"
        property="backgroundColor"
      />
      <Input<WrapperStyles>
        label="Бордер радиус:"
        value={styles}
        onChange={ChangeStyles}
        property="borderRadius"
        typeInput="text"
      />
      <Input<WrapperStyles> label="Бордер:" value={styles} onChange={ChangeStyles} property="border" typeInput="text" />
      <Input<WrapperStyles>
        label="Внутренний отступ:"
        value={styles}
        onChange={ChangeStyles}
        property="padding"
        typeInput="text"
      />

      <Input<WrapperStyles>
        label="Внешний отступ:"
        value={styles}
        onChange={ChangeStyles}
        property="margin"
        typeInput="text"
      />
      <InputColorWheel<WrapperStyles> value={styles} property="color" onChange={ChangeStyles} label="Цвет" />
      <SelectInput<WrapperStyles>
        value={styles}
        onChange={ChangeStyles}
        label="scrollable"
        property="scrollable"
        options={OptionsScrollable}
      />
      <InputDisplay<WrapperStyles> styles={styles} ChangeStyles={ChangeStyles} />
    </>
  )
}
