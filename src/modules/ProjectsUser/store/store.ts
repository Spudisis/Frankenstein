import { autorun, makeAutoObservable } from 'mobx'
import { type MiniatureProjects, STATUS_LOADING } from 'src/domains'
import { Project } from 'src/http'
import axios from 'axios'

class Store {
  constructor () {
    makeAutoObservable(this, {})
  }

  private statusLoading = STATUS_LOADING.SUCCESS
  private idUser: number | null = null
  size = 0
  projects: MiniatureProjects[] = []
  offset = 1
  limit = 4
  locationPath = ''

  get loading () {
    return this.statusLoading
  }

  set loading (value) {
    this.statusLoading = value
  }

  get userIdProjects () {
    return this.idUser
  }

  set userIdProjects (value) {
    this.idUser = value
  }

  async initialProjects () {
    try {
      this.loading = STATUS_LOADING.LOADING

      if (!this.userIdProjects) {
        throw new Error('Нет id')
      }
      const { data } = await Project.getUserProjects(
        this.userIdProjects,
        this.limit,
        this.offset
      )
      this.size = data.userProjects.count

      this.projects = data.userProjects.rows
      this.loading = STATUS_LOADING.SUCCESS
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message)
      } else {
        console.log('unexpected error: ', error)
      }
      this.loading = STATUS_LOADING.ERROR
    }
  }
}

export const StoreProjectsUser = new Store()
autorun(() => {
  if (StoreProjectsUser.userIdProjects) {
    StoreProjectsUser.initialProjects()
  }
  if (!StoreProjectsUser.userIdProjects) {
    StoreProjectsUser.size = 0
    StoreProjectsUser.projects = []
  }
})
