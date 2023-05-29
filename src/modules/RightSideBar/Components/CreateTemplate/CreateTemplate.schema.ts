import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const FORM_SCHEMA = yup.object().shape({
  name: yup.string().required("required").min(3, "minName").max(25, "maxName"),
  privateStatus: yup.boolean(),
  type: yup.string().required("confirmReqPass"),
  layout: yup.string().required("confirmReqPass"),
});
export const RESOLVER = yupResolver(FORM_SCHEMA);
