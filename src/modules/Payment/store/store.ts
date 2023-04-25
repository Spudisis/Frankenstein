import { makeAutoObservable } from "mobx";
import { STATUS_LOADING, UserInfoProfile } from "src/domains";
import { User } from "src/http";

class Payment {
  constructor() {
    makeAutoObservable(this, {});
  }
  private statusLoading: STATUS_LOADING = STATUS_LOADING.SUCCESS;

  private userInfo: UserInfoProfile | null = null;

  get loading() {
    return this.statusLoading;
  }
  set loading(value) {
    this.statusLoading = value;
  }

  get user() {
    return this.userInfo;
  }
  set user(value) {
    this.userInfo = value;
  }

  async getUser(id: string) {
    try {
      this.loading = STATUS_LOADING.LOADING;
      const { data } = await User.getInfoByUserId(id);
      this.user = data;
      console.log(data);
      this.loading = STATUS_LOADING.SUCCESS;
    } catch (error) {
      console.log(error);
      this.loading = STATUS_LOADING.ERROR;
    }
  }
}

export const PaymentStore = new Payment();
