import type {
  FieldErrors,
  UseFormRegister,
  UseFormWatch,
  FieldValues,
  FieldPath
} from 'react-hook-form'

export interface FileUploaderType<
  T extends FieldValues = FieldValues,
  TFieldName extends FieldPath<T> = FieldPath<T>
> {
  register: UseFormRegister<T>
  nameProperty: TFieldName
  errors: FieldErrors<T>
  watch: UseFormWatch<T>
  acceptFiles: string[]
}
