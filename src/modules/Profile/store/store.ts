import { makeAutoObservable } from 'mobx'
import { STATUS_LOADING, type UserInfoProfile } from 'src/domains'
import { User } from 'src/http'
import { AuthStore } from 'src/store/Auth'

class Store {
  constructor () {
    makeAutoObservable(this, {})
  }

  private statusLoading: STATUS_LOADING = STATUS_LOADING.SUCCESS

  private userInfo: UserInfoProfile | null = null

  private id: null | string = null
  userSelf = false
  get idUser () {
    return this.id
  }

  set idUser (value) {
    this.id = value
  }

  get loading () {
    return this.statusLoading
  }

  set loading (value) {
    this.statusLoading = value
  }

  get user () {
    return this.userInfo
  }

  set user (value) {
    this.userInfo = value
  }

  async logout () {
    try {
      this.loading = STATUS_LOADING.LOADING
      await User.logout()
      AuthStore.auth = false
      this.loading = STATUS_LOADING.SUCCESS
    } catch (error) {
      console.log(error)
      this.loading = STATUS_LOADING.ERROR
    }
  }

  async getUser (id: string) {
    try {
      this.loading = STATUS_LOADING.LOADING
      const { data } = await User.getInfoByUserId(id)
      this.user = data
      console.log(data)
      this.loading = STATUS_LOADING.SUCCESS
    } catch (error) {
      console.log(error)
      this.loading = STATUS_LOADING.ERROR
    }
  }
}

export const StoreProfile = new Store()
