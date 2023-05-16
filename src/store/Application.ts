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
} from "../domains/ApplicationTypes";
import { ProjectDataType, STATUS_LOADING } from "src/domains";
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
  target: Module & ParentElem & ParentParent = TARGET_DEFAULT;
  private statusLoading: STATUS_LOADING = STATUS_LOADING.LOADING;

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
  changeFooterHeader(privateName: typeFH, obj: FHObject) {
    if (privateName === typeFH.Header) {
      this.ApplicationHeader = obj;
    }
    if (privateName === typeFH.Footer) {
      this.ApplicationFooter = obj;
    }
  }
  changeModules({ item, id }: { item: ScreenAddElemeny; id: string }) {
    //если совпадает, то не добавляется
    if (id === item.parent) {
      return null;
    }
    console.log(item, id);
    const copyItem = Object.assign({}, item);
    delete copyItem["parent"];
    delete copyItem["originalIndex"];
    console.log(copyItem);
    if (!this.ApplicationScreens) {
      return null;
    }
    const mas = this.ApplicationScreens.map((screen) => {
      if (screen.id === item.parent) {
        const modules = screen.modules?.filter((module) => {
          if (module !== undefined && module.id !== item.id) {
            return module;
          }
          return null;
        });

        return { ...screen, modules: modules };
      }
      if (screen.id === id) {
        //если перетаскиваемый элемент в таргете, то надо сменить его родителя в таргете, чтобы можно было дальше изменять не кликая повторно
        if (this.target.id === item.id) {
          this.target = { ...this.target, parent: screen.id };
        }
        //end
        if (screen.modules) {
          return { ...screen, modules: [...screen.modules, copyItem] };
        } else {
          return { ...screen, modules: [copyItem] };
        }
      }

      return screen;
    });

    this.ApplicationScreens = mas;
  }

  deleteModulesOrBlock({
    parent,
    options,
    name,
    namePrivate,
    id,
  }: ParentElem & (ScreenMas | Module)) {
    if (this.target.id === id) {
      this.target = TARGET_DEFAULT;
    }

    if (namePrivate === "Footer") {
      this.ApplicationFooter = {};
    } else if (namePrivate === "Header") {
      this.ApplicationHeader = {};
    } else if (parent === typeFH.Header) {
      this.ApplicationHeader.modules = this.ApplicationHeader.modules?.filter(
        (elem) => {
          if (typeof elem !== "undefined" && elem.id !== id) {
            return elem;
          }
          return null;
        }
      );
    } else if (parent === typeFH.Footer) {
      this.ApplicationFooter.modules = this.ApplicationFooter.modules?.filter(
        (elem) => {
          if (typeof elem !== "undefined" && elem.id !== id) {
            return elem;
          }
          return null;
        }
      );
    } else {
      if (!this.ApplicationScreens) {
        return null;
      }
      const map = this.ApplicationScreens.map((elem) => {
        if (elem.id === parent) {
          const modules = elem.modules?.filter((module) => {
            if (module !== undefined && module.id !== id) {
              return module;
            }
            return null;
          });

          return { ...elem, modules };
        }
        return elem;
      });
      this.ApplicationScreens = map;
    }
  }

  changeOptionHeaderFooter(privateName: typeFH, obj: OptionsFH) {
    if (privateName === typeFH.Header) {
      this.ApplicationHeader = {
        ...this.ApplicationHeader,
        options: { ...this.ApplicationHeader.options, ...obj },
      };
    }
    if (privateName === typeFH.Footer) {
      this.ApplicationFooter = {
        ...this.ApplicationFooter,
        options: { ...this.ApplicationFooter.options, ...obj },
      };
    }
    this.target.options = { ...this.target.options, ...obj };
  }

  //две функции практически одинаковые
  findAndChangeOptionModules({
    parent,
    id,
    options,
    ParentParent,
  }: ParentElem & { id: id } & { options: Option } & ParentParent) {
    if (parent === typeFH.Header) {
      const mas = this.ApplicationHeader.modules?.map(
        (Module: Module | undefined) => {
          if (typeof Module !== "undefined" && Module.id === id) {
            return { ...Module, options: { ...Module.options, ...options } };
          }
          return Module;
        }
      );
      this.ApplicationHeader.modules = mas;
    } else if (parent === typeFH.Footer) {
      const mas = this.ApplicationFooter.modules?.map(
        (Module: Module | undefined) => {
          if (typeof Module !== "undefined" && Module.id === id) {
            return { ...Module, options: { ...Module.options, ...options } };
          }
          return Module;
        }
      );
      this.ApplicationFooter.modules = mas;
    } else {
      if (!this.ApplicationScreens) {
        return null;
      }

      this.ApplicationScreens = this.ApplicationScreens.map((screen) => {
        if (screen.id === parent && screen.modules) {
          const modules = screen.modules.map((module) => {
            if (typeof module !== "undefined" && module.id === id) {
              return { ...module, options };
            }
            if (
              typeof module !== "undefined" &&
              module.modules &&
              ParentParent === module.id
            ) {
              const updatedSubModules = module.modules.map((subModule) => {
                if (typeof subModule !== "undefined" && subModule.id === id) {
                  return { ...subModule, options };
                }
                return subModule;
              });
              return { ...module, modules: updatedSubModules };
            }
            return module;
          });
          return { ...screen, modules };
        }
        return screen;
      });
    }

    this.target.options = { ...this.target.options, ...options };
  }
  findAndChangeNameModules({
    parent,
    id,
    name,
    ParentParent,
  }: ParentElem & { id: id } & { name: Name } & ParentParent) {
    if (parent === typeFH.Header) {
      const mas = this.ApplicationHeader.modules?.map(
        (Module: Module | undefined) => {
          if (typeof Module !== "undefined" && Module.id === id) {
            console.log({ ...Module, name });
            return { ...Module, name };
          }
          return Module;
        }
      );
      this.ApplicationHeader.modules = mas;
    } else if (parent === typeFH.Footer) {
      const mas = this.ApplicationFooter.modules?.map(
        (Module: Module | undefined) => {
          if (typeof Module !== "undefined" && Module.id === id) {
            return { ...Module, name };
          }
          return Module;
        }
      );
      this.ApplicationFooter.modules = mas;
    } else {
      if (!this.ApplicationScreens) {
        return null;
      }
      console.log(ParentParent);
      this.ApplicationScreens = this.ApplicationScreens.map((screen) => {
        if (screen.id === parent && screen.modules) {
          const modules = screen.modules.map((module) => {
            if (typeof module !== "undefined" && module.id === id) {
              return { ...module, name };
            }
            if (
              typeof module !== "undefined" &&
              module.modules &&
              ParentParent === module.id
            ) {
              const updatedSubModules = module.modules.map((subModule) => {
                if (typeof subModule !== "undefined" && subModule.id === id) {
                  return { ...subModule, name };
                }
                return subModule;
              });
              return { ...module, modules: updatedSubModules };
            }
            return module;
          });
          return { ...screen, modules };
        }
        return screen;
      });

      //ПОИСК МОДУЛЕЙ НА СТРАНИЦАХ
    }
    this.target.options = { ...this.target, name };
  }

  changeName(type: typeFH, elem: Name) {
    if (type === typeFH.Footer) {
      this.ApplicationFooter.name = elem;
    }
    if (type === typeFH.Header) {
      this.ApplicationHeader.name = elem;
    }
    this.target.name = elem;
  }
  setTarget(obj: Module, parent: ParentElem, ParentParent?: ParentParent) {
    if (!obj.id) {
      return null;
    }

    this.target = { ...obj, ...parent, ...ParentParent };
  }
  changePositionBlock(
    newModules: any,
    parent: any,
    ParentParent: any,
    id: string
  ) {
    if (!this.ApplicationScreens) {
      return null;
    }
    this.ApplicationScreens = this.ApplicationScreens.map((screen) => {
      if (screen.id === parent) {
        if (!ParentParent) {
          return { ...screen, modules: newModules };
        } else {
          screen.modules?.map((module) => {
            return { ...screen, modules: { ...module, modules: newModules } };
          });
        }
      }
      return screen;
    });
  }
}
const App = new ApplicationData();
export default App;
