import { type MiniatureProjects } from './miniatureProjects'

export interface UserProjectType {
  userProjects: {
    count: number
    rows: MiniatureProjects[]
  }
}
export interface CreateProjectResponse {
  projectUid: string
}

export interface DeleteProject {
  result: boolean
}
