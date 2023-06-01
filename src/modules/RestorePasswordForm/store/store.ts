import { makeAutoObservable } from 'mobx'
import { STATUS_LOADING } from 'src/domains'
import { User } from 'src/http'
import { type IFormInput } from 'src/modules/Registration/components/Form.types'
import { AuthStore } from 'src/store/Auth'

class Restore {
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

  error = 'Непредвиденная ошибка'
  async getCodeForRestore (body: Pick<IFormInput, 'Email'>): Promise<boolean> {
    try {
      this.loading = STATUS_LOADING.LOADING
      await User.getCodeForRestore(body)
      this.loading = STATUS_LOADING.SUCCESS
      return true
    } catch (error: any) {
      console.log(error)
      this.error = error.response.data.message
      this.loading = STATUS_LOADING.ERROR
      return false
    }
  }

  async restorePassword (
    body: Pick<IFormInput, 'Email' | 'password' | 'accessCode'>
  ) {
    try {
      this.loading = STATUS_LOADING.LOADING
      const { data } = await User.restorePassword(body)
      AuthStore.user = data.userData.user
      if (data.userData.user.isActivated) {
        AuthStore.auth = true
      } else {
        AuthStore.modal = true
      }

      this.loading = STATUS_LOADING.SUCCESS
    } catch (error: any) {
      console.log(error)
      this.error = error.response.data.message
      this.loading = STATUS_LOADING.ERROR
    }
  }
}

export const RestoreStore = new Restore()
