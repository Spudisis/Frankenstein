import { makeAutoObservable } from "mobx";
import { STATUS_LOADING, UserInfoGlobal } from "../domains";
import axios from "axios";

class Auth {
  constructor() {
    makeAutoObservable(this, {}, { deep: true });
  }
  private statusLoading: STATUS_LOADING = STATUS_LOADING.LOADING;
  private authStatus = false;
  private modalOpen = false;
  private userInfo: UserInfoGlobal | null = null;

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

  async checkAuth() {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_URL_BACK_API}person/refresh`,
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
    } finally {
      this.loading = STATUS_LOADING.SUCCESS;
    }
  }
}

export const AuthStore = new Auth();
