import { observer } from 'mobx-react-lite'

import { type ScreenMas } from 'src/domains/ApplicationTypes'
import { FindComponent } from '../FindComponent/FindComponent'
import App from 'src/store/Application'

export const MainConstructor = observer((elem: ScreenMas) => {
  const { id, modules } = elem
  const changeModules = (modules: any) => {
    const newScreen = { ...elem, modules }
    App.changeScreen(newScreen)
  }

  return (
    <>
      {modules ? (
        <FindComponent modules={modules} parent={id} changeModules={changeModules} />
      ) : (
        <div>Нет ничего, см MainCounstructor</div>
      )}
    </>
  )
})
