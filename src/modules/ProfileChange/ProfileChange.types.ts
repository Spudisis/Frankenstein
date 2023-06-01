import { type FieldErrors, type UseFormRegister } from 'react-hook-form'

export interface UserInfoT {
  password: string
  passwordRepeat: string
  nickname: string
}
export interface PropsInput {
  register: UseFormRegister<UserInfoT>
  repeatPass?: boolean
  errors: FieldErrors<UserInfoT>
}
