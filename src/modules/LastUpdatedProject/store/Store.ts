import { makeAutoObservable } from "mobx";
import { MiniatureProjects, STATUS_LOADING } from "src/domains";

import { Project } from "src/http";

class LastProjectStore {
  constructor() {
    makeAutoObservable(this, {});
  }
  private statusLoading: STATUS_LOADING = STATUS_LOADING.LOADING;
  private project: MiniatureProjects | null = null;

  get loading() {
    return this.statusLoading;
  }
  set loading(value) {
    this.statusLoading = value;
  }
  get lastProject() {
    return this.project;
  }
  set lastProject(value) {
    this.project = value;
  }
  async getLastUpdateProject() {
    try {
      this.loading = STATUS_LOADING.LOADING;
      const { data } = await Project.getLastUpdProject();

      this.lastProject = data;

      this.loading = STATUS_LOADING.SUCCESS;
    } catch (error) {
      console.log(error);
      this.loading = STATUS_LOADING.ERROR;
    }
  }
}

export const LastProject = new LastProjectStore();
