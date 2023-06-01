import { type Option, type SubModules } from './ApplicationTypes'

export type ChangeOptions = ({
  options,
  name,
  scrollable
}: ChangeOptionsProp) => void

export interface ChangeOptionsProp {
  options: Option
  name: string
  scrollable?: string
}

export interface ChangeTargetType {
  obj: SubModules
  changeOptions: ChangeOptions
}
