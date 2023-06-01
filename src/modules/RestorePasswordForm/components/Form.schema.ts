import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
const formSchema = yup.object().shape({
  Email: yup
    .string()
    .required('required')
    .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i, 'EmailMatches'),
  password: yup.string().required('requiredPassword').min(3, 'minPassLen').max(20, 'maxPassLen'),
  passwordRepeat: yup
    .string()
    .required('confirmReqPass')
    .min(3, 'minPassLen')
    .max(20, 'maxPassLen')
    .oneOf([yup.ref('password')], 'AccessPass'),
  accessCode: yup.string().required('required').length(6, 'AccessCodeLength')
})

export const RESOLVER = yupResolver(formSchema)
