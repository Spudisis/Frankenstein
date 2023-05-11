import { FieldErrors, UseFormRegister } from "react-hook-form";

export interface UserInfoT {
  password: string;
  passwordRepeat: string;
  nickname: string;
}
export type PropsInput = {
  register: UseFormRegister<UserInfoT>;
  repeatPass?: boolean;
  errors: FieldErrors<UserInfoT>;
};
