import { type Module, Modules, type SubModules } from 'src/domains'

export interface CustomDropHF {
  newModuleDrop: (newModules: Module | SubModules) => void
}
