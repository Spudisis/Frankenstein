import { IFormInput } from "../../modules/Registration/components/Form";
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


}
export const User = new UserAgent();
