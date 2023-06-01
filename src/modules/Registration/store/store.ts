import { makeAutoObservable } from 'mobx'
import { STATUS_LOADING } from 'src/domains'
import { User } from 'src/http'
import { type IFormInput } from '../components/Form.types'
import { AuthStore } from 'src/store/Auth'

class Registration {
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
  async Registration (body: Pick<IFormInput, 'Email' | 'password'>) {
    try {
      this.loading = STATUS_LOADING.LOADING
      const { data } = await User.Registration(body)
      localStorage.setItem('token', data.userData.accessToken)

      // глобальный стор
      AuthStore.user = data.userData.user
      if (data.userData.user.isActivated) {
        AuthStore.auth = true
      } else {
        AuthStore.modal = true
      }

      this.loading = STATUS_LOADING.SUCCESS
    } catch (error: any) {
      this.error = error.response.data.message
      console.log(error)
      this.loading = STATUS_LOADING.ERROR
    }
  }
}

export const StoreReg = new Registration()
