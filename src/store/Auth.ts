import { makeAutoObservable } from "mobx";
import { IFormInput } from "../modules/Registration/components/Form.types";
import { STATUS_LOADING } from "../domains";
import { User } from "../http/agent/User.agent";
import axios from "axios";

class Auth {
  constructor() {
    makeAutoObservable(this, {}, { deep: true });
  }
  private statusLoading: STATUS_LOADING = STATUS_LOADING.SUCCESS;
  private authStatus = false;
  private modalOpen = false;
  private userInfo: any = {
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

  get modal() {
    return this.modalOpen;
  }
  set modal(value) {
    this.modalOpen = value;
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
  async logout() {
    try {
      this.loading = STATUS_LOADING.LOADING;
      const res = await User.logout();
      this.auth = false;
      this.loading = STATUS_LOADING.SUCCESS;
    } catch (error) {
      console.log(error);
      this.loading = STATUS_LOADING.ERROR;
    }
  }

  async checkAuth() {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_URL_BACK}person/refresh`,
        { withCredentials: true }
      );
      localStorage.setItem("token", data.accessToken);
      this.userInfo = data.user;
      if (data.user.isActivated) {
        this.auth = true;
      } else {
        this.modal = true;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export const AuthStore = new Auth();
