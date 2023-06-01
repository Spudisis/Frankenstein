import { type FieldErrors, type UseFormRegister } from 'react-hook-form'
import { type OptionCreate, type STATUS_LOADING } from 'src/domains'

export interface FormType {
  AddProject: ({ projectName, statusAccess }: OptionCreate) => void
  statusLoading: STATUS_LOADING
}
export interface PropsInputs {
  register: UseFormRegister<OptionCreate>
  errors: FieldErrors<OptionCreate>
}
