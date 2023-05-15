import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const FORM_SCHEMA = yup.object().shape({
  projectName: yup
    .string()
    .required("required")
    .min(3, "min length")
    .max(12, "max length"),
  statusAccess: yup.bool(),
});
export const RESOLVER = yupResolver(FORM_SCHEMA);
