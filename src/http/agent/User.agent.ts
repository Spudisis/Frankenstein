import { ChangeInfoT } from "src/domains";
import { IFormInput } from "../../modules/Registration/components/Form.types";
import { BasicAgent } from "./Basic";

class UserAgent extends BasicAgent {
  constructor() {
    super(process.env.REACT_APP_URL_BACK + "person", { withCredentials: true });
  }
  async Registration(body: Pick<IFormInput, "Email" | "password">) {
    const res = await this._http.post(`/registration`, {
      email: body.Email,
      password: body.password,
    });
    return res;
  }
  async Authorization(body: Pick<IFormInput, "Email" | "password">) {
    const res = await this._http.post(`/login`, {
      email: body.Email,
      password: body.password,
    });
    return res;
  }

  async getInfoByUserId(id: string) {
    const res = await this._http.get(`/user/${id}`);
    return res;
  }
  async refreshToken() {
    const res = await this._http.get(`/refresh`);
    return res;
  }
  async logout() {
    const res = await this._http.post("/logout");
    return res;
  }
  async getCodeForRestore(body: Pick<IFormInput, "Email">) {
    const res = await this._http.post(`/getCodeRestore`, {
      email: body.Email,
    });
    return res;
  }
  async restorePassword(
    body: Pick<IFormInput, "Email" | "password" | "accessCode">
  ) {
    const res = await this._http.patch(`/restorePassword`, {
      email: body.Email,
      password: body.password,
      accessCode: body.accessCode,
    });
    return res;
  }

  async changeInfoUser(body: ChangeInfoT) {
    const res = await this._http.patch(`/changeInfoUser`, body);
    return res;
  }
}
export const User = new UserAgent();
