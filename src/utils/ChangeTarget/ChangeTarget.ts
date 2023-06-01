import App from 'src/store/Application'
import { type ChangeTargetType, SectionEnum } from 'src/domains'

export const changeTarget = ({ obj, changeOptions }: ChangeTargetType): void => {
  App.setTarget({ obj, changeOptions })

  if (App.section === SectionEnum.options) return
  App.changeSection(SectionEnum.options)
}
