export interface TemplateType {
  id: number
  name: string
  type: string
  miniature?: string
  privateStatus: boolean
  tiers: string
  layout: string
  createdAt: string
  updatedAt: string
  userId: number
}
export interface CreateTemplateType {
  name: string
  privateStatus: boolean
  type: string
  layout: string
  miniature?: File[]
}
