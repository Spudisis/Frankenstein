import { type ReactElement } from 'react'

export interface PrivateRouteType {
  children: ReactElement
  auth: boolean
  redirectPath?: string
}
