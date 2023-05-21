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
  changeModules({
    item,
    id,
    parent,
  }: { item: ScreenAddElemeny; id: string } & ParentElem) {
    //если совпадает, то не добавляется
    if (id === item.parent) {
      return null;
    }
    console.log(item.parent, parent, id);
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
    ParentParent,
  }: ParentElem & (ScreenMas | Module) & ParentParent) {
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
        if (elem.id === parent && elem.modules) {
          if (ParentParent) {
            const modules = elem.modules.map((module) => {
              console.log(module.id, ParentParent);
              if (ParentParent === module.id) {
                const mapSubModule = module.modules?.filter(
                  (subModule) => subModule?.id !== id
                );

                //wrapper 1 object
                return { ...module, modules: mapSubModule };
              }
              return module;
            });
            return { ...elem, modules: modules };
          } else {
            const modules = elem.modules?.filter((module) => {
              if (module !== undefined && module.id !== id) {
                return module;
              }
              return null;
            });
            return { ...elem, modules: modules };
          }
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
      this.changeScreenParams({
        parent,
        ParentParent,
        id,
        change: { options },
      });
    }

    this.target.options = { ...this.target.options, ...options };
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
    ParentParent: string | undefined,
    id: string
  ) {
    if (!this.ApplicationScreens) {
      return null;
    }
    this.ApplicationScreens = this.ApplicationScreens.map((screen) => {
      if (screen.id !== parent) {
        return screen;
      }
      if (!ParentParent || !screen.modules || !screen.modules.length) {
        return { ...screen, modules: newModules };
      }
      // console.log(screen.modules);
      // console.log(filtered);
      const newSubModules = screen.modules.map((module) => {
        // console.log(parent, screen.id, ParentParent, module);
        if (ParentParent === module.id) {
          return { ...module, modules: newModules };
        }
        return module;
      });
      // console.log(newSubModules);
      return { ...screen, modules: newSubModules };
      // return screen;
    });
  }
  changeModulesWrapper({ item, id, parent }: any) {
    if (!this.ApplicationScreens) {
      return console.log("Нет скринов");
    }
    console.log(item, id, parent);
    this.ApplicationScreens = this.ApplicationScreens.map((screen) => {
      if (parent === screen.id) {
        if (!screen.modules || !screen.modules.length) {
          return screen;
        }
        const mas = screen.modules.map((module) => {
          if (module.id === id) {
            if (!module.modules) {
              return { ...module, modules: [item] };
            }
            return { ...module, modules: [...module.modules, item] };
          }
          return module;
        });
        return { ...screen, modules: mas };
      }
      return screen;
    });
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
            // console.log({ ...Module, name });
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
      this.changeScreenParams({ parent, ParentParent, id, change: { name } });
    }
    this.target.options = { ...this.target, name };
  }

  changeScreenParams({
    parent,
    ParentParent,
    id,
    change,
  }: { change: any; id: string } & ParentElem & ParentParent) {
    //находим нужный скрин
    const screenFind = this.mappingCheckScreens({
      parent,
    });
    if (!screenFind) {
      console.log("Not found screen");
      return null;
    }
    console.log(parent);
    //находим нужный модуль, если есть ParentParent, то ищем совпадения по parent, иначе по id (элемента)
    const findModule = this.mappingCheckModules(
      screenFind,
      ParentParent ? String(ParentParent) : id
    );

    if (!findModule) {
      console.log("первый findModule ошибка");
      return null;
    }
    //находим нужный подмодуль среди модуля найденного ранее,
    const findModuleInModule = ParentParent
      ? this.mappingCheckModules(findModule, id)
      : false;

    if (!findModuleInModule) {
      console.log("второй findModule ошибка");
    }

    this.setNewScreenWithChanges({
      screen: screenFind as Required<ScreenMas>,
      subModule: findModule as Required<SubModules>,
      lastModule: findModuleInModule as Required<Module>,
      id: id,
      parent: parent,
      ParentParent: ParentParent,
      change,
    });
  }

  mappingCheckScreens({ parent }: ParentElem) {
    const checkId = parent;
    if (!this.ApplicationScreens) {
      console.log("not found ApplicationScreens");
      return null;
    }
    if (!checkId) {
      console.log("not found parent");
      return null;
    }
    console.log(this.ApplicationScreens);
    console.log(checkId);
    const find = this.ApplicationScreens.filter(
      (screen) => screen.id === checkId
    )[0];
    return find;
  }
  mappingCheckModules(screen: SubModules | ScreenMas | FHObject, id: string) {
    console.log("checkID:" + id);
    if (!screen.modules) {
      console.log("not found modules");
      return null;
    }
    if (!screen.modules.length) {
      console.log("find zero modules");
      return null;
    }
    if (!id) {
      console.log(
        "габелла, айди нет, см. прошлую функцию как его передаешь приводя к as"
      );
      return null;
    }
    console.log(id);
    const findScreenModule = screen.modules.filter((module) => {
      if (module === undefined) {
        return null;
      }
      console.log(id, module.id);
      if (module.id === id) {
        return module;
      }
      return null;
    })[0];
    if (!findScreenModule) {
      console.log("findScreenModule id undefined");
      return null;
    }
    return findScreenModule;
  }

  setNewScreenWithChanges({
    screen,
    subModule,
    lastModule,
    id,
    parent,
    ParentParent,
    change,
  }: {
    screen: Required<ScreenMas>;
    subModule: Required<SubModules>;
    lastModule?: Required<Module>;
    id: string;
    change: any;
  } & ParentElem &
    ParentParent) {
    //ЧЕК КАЖДЫЙ ТИП ДО ТОГО КАК ВЫЗВАТЬ ЭТУ ФУНКЦИЮ
    console.log(ParentParent);
    const newScreen: ScreenMas[] = [];
    if (!ParentParent) {
      newScreen.push({
        ...screen,
        modules: [
          ...screen.modules.filter((module) => module.id !== subModule.id),
          {
            ...subModule,
            ...change,
          },
        ],
      });
      console.log(newScreen);
    } else {
      newScreen.push({
        ...screen,
        modules: [
          ...screen.modules.filter((module) => module.id !== subModule.id),
          {
            ...subModule,

            modules: [
              ...subModule.modules.filter(
                (module) => module!.id !== lastModule!.id
              ),
              { ...lastModule, ...change },
            ],
          },
        ],
      });
    }

    this.ApplicationScreens = this.ApplicationScreens!.map((screen) =>
      screen.id === parent ? newScreen[0] : screen
    );
    return true;
  }
}
const App = new ApplicationData();
export default App;
