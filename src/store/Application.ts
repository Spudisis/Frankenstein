import { makeAutoObservable } from "mobx";
import { CreateId } from "../components";

import {
  ChangeOptions,
  ChangeTargetType,
  ProjectDataType,
  STATUS_LOADING,
  ScreenAddElemeny,
  FHObject,
  ParentElem,
  ScreenMas,
  SectionEnum,
  typeFH,
  ParentParent,
  SubModules,
} from "src/domains";
import { Project } from "src/http";
import {
  DEFAULT_SCREEN_WRAPPER,
  FOOTER_DEFAULT,
  HEADER_DEFAULT,
  PROJECT_INFO_DEFAULT,
  SCREEN_DEFAULT,
  TARGET_DEFAULT,
} from "./Application.constant";

class ApplicationData {
  ApplicationScreens: ScreenMas[] | null = null;
  ApplicationFooter: FHObject = FOOTER_DEFAULT;
  ApplicationHeader: FHObject = HEADER_DEFAULT;
  constructor() {
    makeAutoObservable(this, {}, { deep: true });
  }
  private projectInfo: ProjectDataType = PROJECT_INFO_DEFAULT;
  section = SectionEnum.options;
  target: SubModules & { changeOptions: ChangeOptions } = TARGET_DEFAULT;
  private statusLoading: STATUS_LOADING = STATUS_LOADING.LOADING;

  //костыль

  prevAddModuleId: String = "";

  get loading() {
    return this.statusLoading;
  }
  set loading(value) {
    this.statusLoading = value;
  }

  get project() {
    return this.projectInfo;
  }
  set project(value) {
    this.project = value;
  }

  async getProject(uid: string) {
    try {
      this.ApplicationFooter = FOOTER_DEFAULT;
      this.ApplicationHeader = HEADER_DEFAULT;
      this.ApplicationScreens = null;
      this.target = TARGET_DEFAULT;

      this.loading = STATUS_LOADING.LOADING;
      const { data } = await Project.getProjectById(uid);

      this.projectInfo = data;

      const layout = JSON.parse(data.layout);
      if (layout.hasOwnProperty("footer")) {
        this.ApplicationFooter = layout.footer;
      }
      if (layout.hasOwnProperty("header")) {
        this.ApplicationHeader = layout.header;
      }
      if (layout.hasOwnProperty("screens")) {
        this.ApplicationScreens = layout.screens;
      }

      this.loading = STATUS_LOADING.SUCCESS;
      return true;
    } catch (error) {
      console.log(error);
      this.loading = STATUS_LOADING.ERROR;
      return false;
    }
  }

  async saveProject() {
    try {
      console.log(this.ApplicationScreens);
      const newLayout = JSON.stringify({
        header: this.ApplicationHeader,
        footer: this.ApplicationFooter,
        screens: this.ApplicationScreens,
      });
      console.log(this.projectInfo.uid);
      await Project.updateProject({
        projectUid: this.project.uid,
        newLayout,
      });
    } catch (error) {
      console.log(error);
    }
  }

  changeScreen(screen: ScreenMas) {
    if (!this.ApplicationScreens) {
      return null;
    }
    this.ApplicationScreens = this.ApplicationScreens.map((elem) => {
      if (elem.id === screen.id) {
        return screen;
      }
      return elem;
    });
  }

  addScreen() {
    if (!this.ApplicationScreens) {
      return (this.ApplicationScreens = SCREEN_DEFAULT);
    }
    this.ApplicationScreens?.push({
      ...SCREEN_DEFAULT[0],
      id: CreateId(),
      modules: [{ ...DEFAULT_SCREEN_WRAPPER, id: CreateId() }],
    });
  }

  changeSection(section: SectionEnum) {
    this.section = section;
  }

  deleteScreen(id: string) {
    if (this.ApplicationScreens) {
      this.clearTarget();
      this.ApplicationScreens = this.ApplicationScreens?.filter(
        (elem) => elem.id !== id
      );
    }
  }

  clearTarget(id?: string) {
    if (id) {
      if (id === this.target.id) {
        return (this.target = TARGET_DEFAULT);
      }
      return null;
    }
    return (this.target = TARGET_DEFAULT);
  }

  //save (check)
  changeFooterHeader(privateName: typeFH, obj: FHObject) {
    if (privateName === typeFH.Header) {
      this.ApplicationHeader = obj;
    }
    if (privateName === typeFH.Footer) {
      this.ApplicationFooter = obj;
    }
  }

  changeFooterHeaderScreen(
    privateName: typeFH,
    obj: FHObject,
    idScreen: string
  ) {
    if (!this.ApplicationScreens) {
      return null;
    }

    const newScreens = this.ApplicationScreens.map((elem) => {
      if (idScreen === elem.id) {
        if (privateName === typeFH.Footer) {
          return { ...elem, uncommonFooter: obj };
        }
        if (privateName === typeFH.Header) {
          return { ...elem, uncommonHeader: obj };
        }
      }
      return { ...elem };
    });
    console.log(newScreens);
    this.ApplicationScreens = newScreens;
  }

  setTarget({ obj, changeOptions }: ChangeTargetType) {
    if (!obj.id) {
      return null;
    }

    this.target = { ...obj, changeOptions };
  }
}
const App = new ApplicationData();
export default App;
