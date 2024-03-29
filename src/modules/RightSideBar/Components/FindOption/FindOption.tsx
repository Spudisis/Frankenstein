import React, { type ReactElement } from 'react'

import { HFOptions, ButtonOptions, WrapperOptions, TextOptions, ScreenOptions } from '../Options'
import { observer } from 'mobx-react-lite'
import App from 'src/store/Application'
import { typeFH } from 'src/domains'

export const FindOption = observer(() => {
  const target = App.target

  const [masOptions, setMasOptions] = React.useState<ReactElement[]>([])

  React.useEffect(() => {
    if (!target.id) {
      setMasOptions([])
      return
    }

    const mas: ReactElement[] = []
    console.log(target.namePrivate === 'Footer')
    if (
      target.namePrivate === typeFH[0] ||
      target.namePrivate === typeFH[1] ||
      target.namePrivate === 'Header' ||
      target.namePrivate === 'Footer'
    ) {
      mas.push(
        <HFOptions
          key={target.id}
          namePrivate={target.namePrivate}
          options={target.options}
          name={target.name}
          id={target.id}
          changeOptions={target.changeOptions}
          modules={target.modules}
        />
      )
    }
    if (target.namePrivate === 'Button') {
      mas.push(
        <ButtonOptions
          key={target.id}
          options={target.options}
          id={target.id}
          name={target.name}
          namePrivate={target.namePrivate}
          changeOptions={target.changeOptions}
        />
      )
    }
    if (target.namePrivate === 'Text') {
      mas.push(
        <TextOptions
          key={target.id}
          options={target.options}
          id={target.id}
          name={target.name}
          namePrivate={target.namePrivate}
          changeOptions={target.changeOptions}
        />
      )
    }
    if (target.namePrivate === 'Wrapper') {
      mas.push(
        <WrapperOptions
          key={target.id}
          options={target.options}
          id={target.id}
          name={target.name}
          namePrivate={target.namePrivate}
          changeOptions={target.changeOptions}
          modules={target.modules}
        />
      )
    }
    if (target.namePrivate === 'newScreen') {
      mas.push(
        <ScreenOptions
          key={target.id}
          options={target.options}
          id={target.id}
          name={target.name}
          namePrivate={target.namePrivate}
          changeOptions={target.changeOptions}
        />
      )
    }
    setMasOptions(mas)
  }, [target])

  return <div>{masOptions.length !== 0 && target.id ? masOptions : 'отсутствуют настройки'}</div>
})
