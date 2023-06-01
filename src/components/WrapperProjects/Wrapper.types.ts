import { type MiniatureProjects, type STATUS_LOADING } from 'src/domains'

export interface WrapperTypes {
  projects: MiniatureProjects[]
  size: number
  loading: STATUS_LOADING
  nameSection: string
  offset: number
  limit: number

  ShowMore: (selectedItem: { selected: number }) => void
  path?: string
}
