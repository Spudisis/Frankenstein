import { makeAutoObservable } from "mobx";
import { MiniatureProjects } from "src/domains";
import { Project } from "src/http";
import { STATUS_LOADING } from "src/domains";

class Store {
  constructor() {
    makeAutoObservable(this, {});
  }

  private statusLoading = STATUS_LOADING.SUCCESS;
  private idUser: number | null = null;
  size = 0;
  projects: MiniatureProjects[] = [];

  get loading() {
    return this.statusLoading;
  }
  set loading(value) {
    this.statusLoading = value;
  }

  get userIdProjects() {
    return this.idUser;
  }
  set userIdProjects(value) {
    this.idUser = value;
  }
  async initialProjects() {
    try {
      this.loading = STATUS_LOADING.LOADING;
      // const data = await Project.getUserProjects(this.userIdProjects);
      this.projects = [];
      this.size = 20;

      // this.size = data.size;
      // this.projects = data.projects;
      this.loading = STATUS_LOADING.SUCCESS;
    } catch (error) {
      console.log(error);
      this.loading = STATUS_LOADING.ERROR;
    }
  }
  async createNewProject() {
    try {
      const options = {
        projectName: "4141dadsaa",
        statusAccess: true,
      };
      this.loading = STATUS_LOADING.LOADING;
      await Project.createProject(options);

      this.loading = STATUS_LOADING.SUCCESS;
      this.initialProjects();
    } catch (error) {
      console.log(error);
      this.loading = STATUS_LOADING.ERROR;
    }
  }
}

export const StoreProjectsUser = new Store();
