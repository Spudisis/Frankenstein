import {
  type CreateProjectResponse,
  type DeleteProject,
  type MiniatureProjects,
  type OptionCreate,
  ProjectDataType,
  type UpdProjectType,
  type UserProjectType
} from 'src/domains'
import { BasicAgent } from './Basic'

class ProjectAgent extends BasicAgent {
  constructor () {
    super(process.env.REACT_APP_URL_BACK_API + 'projects', {
      withCredentials: true
    })
  }

  // have
  async createProject (params: OptionCreate) {
    console.log(params)
    const formData = new FormData()

    formData.append('projectName', params.projectName)
    formData.append('statusAccess', `${params.statusAccess}`)
    if ((params.miniature != null) && params.miniature[0]) {
      formData.append('miniature', params.miniature[0])
    } else {
      formData.append('miniature', '')
    }

    console.log(formData)
    const res = await this._http.post<CreateProjectResponse>(
      '/createnew',
      formData
    )
    return res
  }

  // have
  async deleteProject (id: string) {
    const res = await this._http.delete<DeleteProject>('/delete', {
      data: { projectUid: id }
    })
    return res
  }

  // have
  async getProjectById (uid: string) {
    const res = await this._http.get(`/project-info/${uid}`)
    return res
  }

  async getUserProjects (id: number, limit = 10, offset = 0) {
    const res = await this._http.get<UserProjectType>(
      `/my-projects?p=${offset}&l=${limit}&userId=${id}`
    )
    return res
  }

  // have
  async getProjects (limit = 10, offset = 1) {
    const res: any = await this._http.get(
      `/public-projects?p=${offset}&l=${limit}`
    )
    console.log(res)
    // ?limit=${limit}&offset=${offset}
    return res
  }

  // have
  async updateProject (body: UpdProjectType) {
    const res = await this._http.patch('/update', body)
    return res
  }

  async getLastUpdProject () {
    const res = await this._http.get<MiniatureProjects>('/last-update-project')
    return res
  }
}
export const Project = new ProjectAgent()
