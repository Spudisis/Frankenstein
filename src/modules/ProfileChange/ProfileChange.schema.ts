import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const FORM_SCHEMA = yup.object().shape({
  password: yup
    .string()
    .test("password", "Invalid password", function (value) {
      const isPasswordEmpty = !value || value.length === 0;
      if (isPasswordEmpty) {
        return true; // Пароль пустой, пропускаем валидацию
      }
      return yup
        .string()
        .min(5, "minPassLen")
        .max(20, "maxPassLen")
        .validate(value)
        .then(() => true)
        .catch((err) => {
          throw new yup.ValidationError(err.errors, null, "password");
        });
    })
    .nullable(),

  passwordRepeat: yup
    .string()
    .test("password", "Invalid password", function (value) {
      const passwordFieldValue = this.resolve(yup.ref("password"));
      if (!passwordFieldValue) {
        return true; // Пароль пустой, пропускаем валидацию
      }
      const passwordsMatch = value === passwordFieldValue;
      if (passwordsMatch) {
        return true;
      }
      throw new yup.ValidationError("AccessPass", null, "passwordRepeat");
    })
    .nullable(),

  nickname: yup.string().min(5, "minNickLength").max(15, "maxNickLength"),
});
export const RESOLVER = yupResolver(FORM_SCHEMA);
