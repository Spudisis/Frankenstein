import { makeAutoObservable } from "mobx";
import { MiniatureProjects } from "src/domains";
import { STATUS_LOADING } from "src/domains";
import { Project } from "src/http";

class Store {
  constructor() {
    makeAutoObservable(this, {});
  }
  private statusLoading = STATUS_LOADING.SUCCESS;
  size = 0;
  projects: MiniatureProjects[] = [];

  limit = 8;
  offset = 1;

  get loading() {
    return this.statusLoading;
  }
  set loading(value) {
    this.statusLoading = value;
  }

  async getProjects() {
    try {
      this.loading = STATUS_LOADING.LOADING;
      const { data } = await Project.getProjects(this.limit, this.offset);

      this.size = data.projects.count;
      this.projects = data.projects.rows;

      this.loading = STATUS_LOADING.SUCCESS;
    } catch (error) {
      console.log(error);
      this.loading = STATUS_LOADING.ERROR;
    }
  }
  async createNewProject() {
    try {
      this.loading = STATUS_LOADING.LOADING;
      const options = {
        projectName: "aboba",
        statusAccess: true,
      };

      await Project.createProject(options);

      this.loading = STATUS_LOADING.SUCCESS;
      this.getProjects();
    } catch (error) {
      console.log(error);
      this.loading = STATUS_LOADING.ERROR;
    }
  }
}

export const StoreProjects = new Store();
