import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
const FORM_SCHEMA = yup.object().shape({
  Email: yup
    .string()
    .required('required')
    .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i, 'EmailMatches'),
  password: yup.string().required('requiredPassword').min(5, 'minPassLen').max(20, 'maxPassLen')
})
export const RESOLVER = yupResolver(FORM_SCHEMA)
