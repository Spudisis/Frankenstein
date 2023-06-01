import { type ResponseTemplates } from 'src/domains/TemplatesAgentResponse'
import { BasicAgent } from './Basic'
import { type CreateTemplateType } from 'src/domains'

class TemplatesAgent extends BasicAgent {
  constructor () {
    super(process.env.REACT_APP_URL_BACK_API + 'templates', {
      withCredentials: true
    })
  }

  async getTemplates (page = 1, limit = 10, type: string) {
    const { data } = await this._http.get<ResponseTemplates>(`/getType?p=${page}&l=${limit}&type=${type}`)
    console.log(data.rows)
    return data
  }

  async getTemplatesUser (page = 1, limit = 10, type?: string) {
    const { data } = await this._http.get<ResponseTemplates>(`/getUser?p=${page}&l=${limit}&type=${type}`)
    return data
  }

  async createTemplate (body: CreateTemplateType) {
    const formData = new FormData()
    formData.append('name', body.name)
    formData.append('privateStatus', `${body.privateStatus}`)
    formData.append('type', body.type)
    formData.append('layout', body.layout)

    if (body.miniature != null) {
      formData.append('miniature', body.miniature[0])
    }

    const { data } = await this._http.post('/create', formData)
    return data
  }

  async update (body: any) {
    const { data } = await this._http.patch('/update', body)
    return data
  }

  async deleteTemplate (id: number) {
    const { data } = await this._http.delete(`/create&id=${id}`)
    return data
  }
}
export const Templates = new TemplatesAgent()
