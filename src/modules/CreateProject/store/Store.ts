import { makeAutoObservable } from 'mobx'
import { type OptionCreate, STATUS_LOADING } from 'src/domains'
import { Project } from 'src/http'

class CreateProject {
  constructor () {
    makeAutoObservable(this, {})
  }

  private statusLoading: STATUS_LOADING = STATUS_LOADING.SUCCESS

  get loading () {
    return this.statusLoading
  }

  set loading (value) {
    this.statusLoading = value
  }

  async createNewProject ({ projectName, statusAccess, miniature }: OptionCreate) {
    try {
      this.loading = STATUS_LOADING.LOADING

      const { data } = await Project.createProject({
        projectName,
        statusAccess,
        miniature
      })

      this.loading = STATUS_LOADING.SUCCESS
      return data.projectUid
    } catch (error) {
      console.log(error)
      this.loading = STATUS_LOADING.ERROR
    }
  }
}

export const StoreProjectCreate = new CreateProject()
