import { IFormInput } from "../../modules/Registration/components/Form.types";
import { BasicAgent } from "./Basic";

class UserAgent extends BasicAgent {
  constructor() {
    super("localhost");
  }
  async Registration(body: Pick<IFormInput, "Email" | "password">) {
    const res = await this._http.post(`/registration`, body);
    return res;
  }
  async Authorization(body: Pick<IFormInput, "Email" | "password">) {
    const res = await this._http.post(`/authorization`, body);
    return res;
  }

  async getInfoByUserId(id: string) {
    const res = await this._http.get(`/user/${id}`);
    return res;
  }
  async refreshToken() {
    const res = await this._http.get(`/user/refreshToken`);
    return res;
  }
  async getCodeForRestore(body: Pick<IFormInput, "Email">) {
    const res = await this._http.post(`/user/getCodeRestore`, body);
    return res;
  }
  async restorePassword(
    body: Pick<IFormInput, "Email" | "password" | "accessCode">
  ) {
    const res = await this._http.patch(`/user/restorePassword`, body);
    return res;
  }
}
export const User = new UserAgent();
