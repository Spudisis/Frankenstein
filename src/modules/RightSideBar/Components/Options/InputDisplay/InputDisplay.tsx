import React from 'react'
import { CustomDetails } from '../CustomDetails'
import { SelectInput } from '../SelectInput'
import {
  OptionDisplay,
  OptionFlexDirection,
  OptionsAlign,
  OptionsGridColumns,
  OptionsJustify
} from '../Options.constant'
import { Input } from '../Input'
import { type TypeInputDisplay } from './InputDisplay.types'
import { type TypeDisplayOptions } from '../Options.types'

export const InputDisplay = <T extends TypeDisplayOptions>({ styles, ChangeStyles }: TypeInputDisplay<T>) => {
  return (
    <CustomDetails>
      <>
        <SelectInput<T>
          value={styles}
          onChange={ChangeStyles}
          label="Display"
          property={'display'}
          options={OptionDisplay}
        />
        {styles.display === 'flex' && (
          <>
            <SelectInput<T>
              value={styles}
              onChange={ChangeStyles}
              label="justify"
              property={'justifyContent'}
              options={OptionsJustify}
            />
            <SelectInput<T>
              value={styles}
              onChange={ChangeStyles}
              label="align"
              property="alignItems"
              options={OptionsAlign}
            />
            <SelectInput<T>
              value={styles}
              onChange={ChangeStyles}
              label="direction"
              property="flexDirection"
              options={OptionFlexDirection}
            />
          </>
        )}
        {styles.display === 'grid' && (
          <>
            <SelectInput<T>
              value={styles}
              onChange={ChangeStyles}
              label="columns"
              property="gridTemplateColumns"
              options={OptionsGridColumns}
            />
            <Input<T>
              label="Отступ между колонками:"
              value={styles}
              onChange={ChangeStyles}
              property="gridColumnGap"
              typeInput="text"
            />
            <Input<T>
              label="Отступ между строчками:"
              value={styles}
              onChange={ChangeStyles}
              property="gridRowGap"
              typeInput="text"
            />
          </>
        )}
      </>
    </CustomDetails>
  )
}
