import { makeAutoObservable } from "mobx";
import { STATUS_LOADING, UserInfoChange } from "src/domains";
import { User } from "src/http";
import { UserInfoT } from "../ProfileChange.types";

class ChangeProfile {
  constructor() {
    makeAutoObservable(this, {});
  }

  private msgError: string = "";
  private userInfo: UserInfoChange | null = null;
  private oldNickname: string | null = null;
  private statusLoading: STATUS_LOADING = STATUS_LOADING.LOADING;
  get loading() {
    return this.statusLoading;
  }
  set loading(value) {
    this.statusLoading = value;
  }
  get info() {
    return this.userInfo;
  }
  get err() {
    return this.msgError;
  }

  async getUserInfo(id: string) {
    try {
      this.statusLoading = STATUS_LOADING.LOADING;
      const { data } = await User.getInfoByUserId(id);
      this.userInfo = { nickname: data.nickname, tiers: data.tiers };
      this.oldNickname = data.nickname;
      console.log(data);
      this.statusLoading = STATUS_LOADING.SUCCESS;
    } catch (error) {
      this.statusLoading = STATUS_LOADING.ERROR;
      console.log(error);
    }
  }
  async changeUserInfo({
    nickname,
    password,
  }: Omit<UserInfoT, "passwordRepeat">) {
    try {
      this.statusLoading = STATUS_LOADING.LOADING;
      if (!this.oldNickname) {
        throw new Error();
      }

      await User.changeInfoUser({
        oldNickname: this.oldNickname,
        nickname,
        password,
      });

      this.statusLoading = STATUS_LOADING.SUCCESS;
      return true;
    } catch (error: any) {
      this.statusLoading = STATUS_LOADING.ERROR;
      console.log(error);

      this.msgError = error.response.data.message;
      return false;
    }
  }
}

export const ProfileChange = new ChangeProfile();
