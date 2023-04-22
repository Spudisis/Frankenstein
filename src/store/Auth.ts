import { makeAutoObservable } from "mobx";
import { IFormInput } from "../modules/Registration/components/Form.types";
import { STATUS_LOADING } from "./types/StatusLoading";
import { User } from "../http/agent/User.agent";

class Auth {
  constructor() {
    makeAutoObservable(this, {}, { deep: true });
  }
  private statusLoading: STATUS_LOADING = STATUS_LOADING.SUCCESS;
  private authStatus = false;
  private userInfo = {
    id: 12,
  };

  get auth() {
    return this.authStatus;
  }
  set auth(value) {
    this.authStatus = value;
  }

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

  async Authorization(body: Pick<IFormInput, "Email" | "password">) {
    try {
      this.loading = STATUS_LOADING.LOADING;
      console.log(body);

      const data = await User.Authorization(body);
      this.loading = STATUS_LOADING.SUCCESS;
    } catch (error) {
      console.log(error);
      this.loading = STATUS_LOADING.ERROR;
    }
  }
  async Registration(body: Pick<IFormInput, "Email" | "password">) {
    try {
      this.loading = STATUS_LOADING.LOADING;
      console.log(body);

      const data = await User.Registration(body);
      this.loading = STATUS_LOADING.SUCCESS;
    } catch (error) {
      console.log(error);
      this.loading = STATUS_LOADING.ERROR;
    }
  }
  async getCodeForRestore(body: Pick<IFormInput, "Email">): Promise<boolean> {
    try {
      this.loading = STATUS_LOADING.LOADING;
      const res = await User.getCodeForRestore(body);
      this.loading = STATUS_LOADING.SUCCESS;
      return true;
    } catch (error) {
      console.log(error);
      this.loading = STATUS_LOADING.ERROR;
      return false;
    }
  }
  async restorePassword(
    body: Pick<IFormInput, "Email" | "password" | "accessCode">
  ): Promise<boolean> {
    try {
      this.loading = STATUS_LOADING.LOADING;
      const res = await User.restorePassword(body);
      this.loading = STATUS_LOADING.SUCCESS;
      return true;
    } catch (error) {
      console.log(error);
      this.loading = STATUS_LOADING.ERROR;
      return false;
    }
  }
  async GetInfoByUserId(id: string) {
    try {
      this.loading = STATUS_LOADING.LOADING;
      const res = await User.getInfoByUserId(id);
      this.loading = STATUS_LOADING.SUCCESS;
    } catch (error) {
      console.log(error);
      this.loading = STATUS_LOADING.ERROR;
    }
  }
}

export const AuthStore = new Auth();
