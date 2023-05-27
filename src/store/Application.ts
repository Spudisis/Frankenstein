import { autorun, makeAutoObservable } from "mobx";
import { CreateId } from "../components";

import {
  ScreenAddElemeny,
  FHObject,
  Module,
  ParentElem,
  ScreenMas,
  SectionEnum,
  typeFH,
  id,
  Name,
  Option,
  OptionsFH,
  ParentParent,
  SubModules,
} from "../domains/ApplicationTypes";
import { ChangeOptions, ChangeTargetType, ProjectDataType, STATUS_LOADING } from "src/domains";
import { Project } from "src/http";
import {
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
      name: "screen new",
      namePrivate: "newScreen",
      id: CreateId(),
      modules: [],
      options: {},
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

    this.ApplicationScreens = this.ApplicationScreens.map((elem) => {
      if (idScreen === elem.id) {
        if (privateName === typeFH.Footer) {
          return { ...elem, uncommonFooter: obj };
        }
        if (privateName === typeFH.Header) {
          return { ...elem, uncommonHeader: obj };
        }
      }
      return elem;
    });
  }

  changeModules({
    item,
    id,
    parent,
    ParentParent,
    oldId,
  }: { item: ScreenAddElemeny; id: string; oldId: string } & ParentElem &
    ParentParent) {
    //если совпадает, то не добавляется
    if (id === item.parent) {
      return null;
    }
    console.log(item.parent, parent, id, oldId);
    const copyItem = Object.assign({}, item);
    delete copyItem["parent"];
    delete copyItem["originalIndex"];
    // console.log(copyItem);
    if (!this.ApplicationScreens) {
      return null;
    }
    const mas = this.ApplicationScreens.map((screen) => {
      if (screen.id === item.parent) {
        const modules = screen.modules?.filter((module) => {
          if (module !== undefined && module.id !== oldId) {
            return module;
          }
          return null;
        });

        return { ...screen, modules: modules };
      }
      if (screen.id === id) {
        //если перетаскиваемый элемент в таргете, то надо сменить его родителя в таргете, чтобы можно было дальше изменять не кликая повторно
        if (this.target.id === oldId) {
          this.target = { ...this.target };
        }
        //end
        if (screen.modules) {
          if (ParentParent) {
            const addToTwoDeepModule = screen.modules.map((module) => {
              if (module.id === ParentParent) {
                if (module.modules) {
                  return { ...module, modules: [...module.modules, copyItem] };
                }
                return { ...module, modules: [copyItem] };
              }
              return module;
            });
            return { ...screen, modules: addToTwoDeepModule };
          }
          if (this.prevAddModuleId === item.id) {
            return screen;
          }
          return { ...screen, modules: [...screen.modules, copyItem] };
        } else {
          return { ...screen, modules: [copyItem] };
        }
      }

      return screen;
    });
    this.prevAddModuleId = item.id;
    this.ApplicationScreens = mas;
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
