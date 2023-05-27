import { makeAutoObservable } from "mobx";
import { STATUS_LOADING, TemplateType } from "src/domains";
import { Templates } from "src/http";

export class Pictures {
  constructor() {
    makeAutoObservable(this, {});
  }

  statusLoading: STATUS_LOADING = STATUS_LOADING.LOADING;

  templates: TemplateType[] = [];
  count: number = 0;
  open = false;
  page = 1;
  limit = 10;

  async getTemplates(type: string) {
    try {
      console.log(type);
      const data = await Templates.getTemplates(this.page, this.limit, type);
      this.count = data.count;
      this.templates = data.rows;
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
const store = new Pictures();

export type PicturesTypeStore = typeof store;
