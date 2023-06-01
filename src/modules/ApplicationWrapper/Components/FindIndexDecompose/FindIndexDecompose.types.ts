import { type SubModules, type Module } from 'src/domains'

export interface FindIndexPropComponent {
  modules: SubModules[] | Module[]
}

export type FindIndexFunc = (id: string) => {
  card: Module
  index: number
  id: string
} | null
