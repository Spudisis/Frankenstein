import { makeAutoObservable } from "mobx";
import { CreateId } from "../components";

const initialTarget = {
  parent: "",
  namePrivate: "",
  id: "",
  name: "",
  options: {},
};

export type Name = string;

export type Option = any | OptionsFH;

export type id = string;

export type Module = {
  name: Name;
  namePrivate: string;
  options: Option;
  id: id;
};

export interface ScreenMas {
  name: Name;
  namePrivate: string;
  id: id;
  modules?: (Module | undefined)[] | undefined;
  options?: Option;
}

// interface ApplicationT {
//   footer?: ScreenMas;
//   header?: ScreenMas;
//   screens?: ScreenMas[];
// }

export enum typeFH {
  "Header",
  "Footer",
}

type OptionsFH = {
  backgroundColor?: string;
  height?: string;
};

export enum SectionEnum {
  "pictures",
  "options",
}

export type ParentElem = {
  parent?: string | typeFH;
};

export type FHObject = Partial<ScreenMas>;

class ApplicationData {
  ApplicationScreens: ScreenMas[] = [{ name: "11", namePrivate: "screen", id: "1445114", options: {} }];
  ApplicationFooter: FHObject = {
    name: "111",
    namePrivate: "Footer",
    id: "a1411",
    modules: [
      {
        name: "5111кпвы",
        namePrivate: "Button",
        options: {
          name: "but9",
          height: "50px",
          width: "90px",
        },
        id: CreateId(),
      },
    ],
    options: {
      backgroundColor: "green",
      height: "80px",
    },
  };
  ApplicationHeader: FHObject = {
    namePrivate: "Header",
    name: "header",
    id: "41941",
    modules: [
      {
        name: "dg",
        namePrivate: "Button",
        options: {
          name: "button",
          height: "30px",
          width: "100px",
        },
        id: CreateId(),
      },
      {
        name: "dg41",
        namePrivate: "Button",
        options: {
          name: "button",
          height: "30px",
          width: "100px",
        },
        id: CreateId(),
      },
      {
        name: "dg41",
        namePrivate: "Button",
        options: {
          name: "button",
          height: "30px",
          width: "80px",
        },
        id: CreateId(),
      },
    ],
    options: {
      height: "30px",
      backgroundColor: "blue",
    },
  };

  section = SectionEnum.pictures;
  target: Module & ParentElem = initialTarget;

  constructor() {
    makeAutoObservable(this, {}, { deep: true });
  }

  addScreen() {
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
  changeFooterHeader(privateName: typeFH, obj: any) {
    if (privateName === typeFH.Header) {
      this.ApplicationHeader = obj;
    }
    if (privateName === typeFH.Footer) {
      this.ApplicationFooter = obj;
    }
  }

  deleteModulesOrBlock({ parent, options, name, namePrivate, id }: ParentElem & (ScreenMas | Module)) {
    if (this.target.id === id) {
      this.target = initialTarget;
    }
    if (namePrivate === "Footer") {
      this.ApplicationFooter = {};
    } else if (namePrivate === "Header") {
      this.ApplicationHeader = {};
    } else if (parent === typeFH.Header) {
      this.ApplicationHeader.modules = this.ApplicationHeader.modules?.filter((elem) => {
        if (typeof elem !== "undefined" && elem.id !== id) {
          return elem;
        }
        return null;
      });
    } else if (parent === typeFH.Footer) {
      this.ApplicationFooter.modules = this.ApplicationFooter.modules?.filter((elem) => {
        if (typeof elem !== "undefined" && elem.id !== id) {
          return elem;
        }
        return null;
      });
    } else {
      // МОДУЛИ СО СТРАНИЦЫ
    }
  }

  changeOptionHeaderFooter(privateName: typeFH, obj: OptionsFH) {
    if (privateName === typeFH.Header) {
      this.ApplicationHeader = { ...this.ApplicationHeader, options: { ...this.ApplicationHeader.options, ...obj } };
    }
    if (privateName === typeFH.Footer) {
      this.ApplicationFooter = { ...this.ApplicationFooter, options: { ...this.ApplicationFooter.options, ...obj } };
    }
    this.target.options = { ...this.target.options, ...obj };
  }
  findAndChangeOptionModules({ parent, id, options }: ParentElem & { id: id } & { options: Option }) {
    if (parent === typeFH.Header) {
      const mas = this.ApplicationHeader.modules?.map((Module: Module | undefined) => {
        if (typeof Module !== "undefined" && Module.id === id) {
          return { ...Module, options: { ...Module.options, ...options } };
        }
        return Module;
      });
      this.ApplicationHeader.modules = mas;
    } else if (parent === typeFH.Footer) {
      const mas = this.ApplicationFooter.modules?.map((Module: Module | undefined) => {
        if (typeof Module !== "undefined" && Module.id === id) {
          return { ...Module, options: { ...Module.options, ...options } };
        }
        return Module;
      });
      this.ApplicationFooter.modules = mas;
    } else {
      //ПОИСК МОДУЛЕЙ НА СТРАНИЦАХ
    }
    this.target.options = { ...this.target.options, ...options };
  }
  findAndChangeNameModules({ parent, id, name }: ParentElem & { id: id } & { name: Name }) {
    if (parent === typeFH.Header) {
      const mas = this.ApplicationHeader.modules?.map((Module: Module | undefined) => {
        if (typeof Module !== "undefined" && Module.id === id) {
          console.log({ ...Module, name });
          return { ...Module, name };
        }
        return Module;
      });
      this.ApplicationHeader.modules = mas;
    } else if (parent === typeFH.Footer) {
      const mas = this.ApplicationFooter.modules?.map((Module: Module | undefined) => {
        if (typeof Module !== "undefined" && Module.id === id) {
          return { ...Module, name };
        }
        return Module;
      });
      this.ApplicationFooter.modules = mas;
    } else {
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
  setTarget(obj: Module) {
    this.target = obj;
  }
}
const App = new ApplicationData();
export default App;