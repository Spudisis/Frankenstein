import { makeAutoObservable } from "mobx";
import { STATUS_LOADING, StartBuild } from "src/domains";
import { Project } from "src/http";
import { BuildAgent } from "src/http/agent/Build.agent";

class OptionProject {
  constructor() {
    makeAutoObservable(this, {});
  }
  private statusLoading: STATUS_LOADING = STATUS_LOADING.SUCCESS;
  get loading() {
    return this.statusLoading;
  }
  set loading(value) {
    this.statusLoading = value;
  }

  async deleteProject(id: string) {
    try {
      this.loading = STATUS_LOADING.LOADING;

      const { data } = await Project.deleteProject(id);

      this.loading = STATUS_LOADING.SUCCESS;
      return data;
    } catch (error) {
      console.log(error);
      this.loading = STATUS_LOADING.ERROR;
    }
  }

  async runBuild({ uid }: StartBuild) {
    try {
      this.loading = STATUS_LOADING.LOADING;

      const { data } = await BuildAgent.runBuild({ uid });
      console.log(data);
      this.loading = STATUS_LOADING.SUCCESS;
    } catch (error) {
      console.log(error);
      this.loading = STATUS_LOADING.ERROR;
    }
  }
}

export const ProjectOption = new OptionProject();
