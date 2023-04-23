import { BasicAgent } from "./Basic";

class ProjectAgent extends BasicAgent {
  constructor() {
    super("localhost");
  }
  async getProjectById(id: string) {
    const res = await this._http.get(`/projects/${id}`);
    return res;
  }
  async getUserProjects(id: number, limit = 10, offset = 0) {
    const res = await this._http.get(
      `/projectsUser?limit=${limit}&offset=${offset}`
    );
    return res;
  }
  async getProjects(limit = 10, offset = 0) {
    const res = await this._http.get(
      `/projects?limit=${limit}&offset=${offset}`
    );
    return res;
  }
}
export const Project = new ProjectAgent();
