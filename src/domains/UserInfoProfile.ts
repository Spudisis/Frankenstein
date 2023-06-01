export interface UserInfoProfile {
  createdAt: string
  email: string
  id: number
  isActivated: boolean
  nickname: string
  tiers: string
  updatedAt: string
}

export type UserInfoChange = Pick<UserInfoProfile, 'nickname' | 'tiers'>
