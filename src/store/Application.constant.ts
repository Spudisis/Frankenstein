import { ChangeOptions, ChangeOptionsProp, SubModules } from "src/domains";
import { v4 as uuidv4 } from "uuid";
export const DEFAULT_ID = uuidv4();

export const HEADER_DEFAULT = {
  namePrivate: "Header",
  name: "",
  id: "",
  keyWord: "",
  modules: [],
  options: {},
};
export const FOOTER_DEFAULT = {
  namePrivate: "Footer",
  name: "",
  id: "",
  keyWord: "",
  modules: [],
  options: {},
};
export const DEFAULT_SCREEN_WRAPPER = {
  options: {
    color: "black",
    borderRadius: "0px",
    height: "100%",
    backgroundColor: "#FFFFFF",
    padding: "2px",
    margin: "0px",
    width: "auto",
    border: "none",
    display: "grid",
    flexDirection: "row",
    justifyContent: "",
    alignItems: "",
    gridTemplateColumns: "1",
    gridColumnGap: "",
    gridRowGap: "",
  },
  name: "wrapper1",
  namePrivate: "Wrapper",
  id: "f83db156-ebb0-40dc-a98d-1199c8b75c54",
  modules: [],
  scrollable: "false",
};
export const SCREEN_DEFAULT = [
  {
    name: "screen new",
    namePrivate: "newScreen",
    id: DEFAULT_ID,
    options: {},
    modules: [DEFAULT_SCREEN_WRAPPER],
    uncommonHeader: {},
    uncommonFooter: {},
  },
];

export const SCREEN_OBJECT = {
  name: "screen new",
  namePrivate: "newScreen",
  id: DEFAULT_ID,
  options: {},
  modules: [
    {
      options: {
        color: "black",
        borderRadius: "0px",
        height: "100%",
        backgroundColor: "#2a5799",
        padding: "2px",
        margin: "0px",
        width: "auto",
        border: "none",
        display: "grid",
        flexDirection: "row",
        justifyContent: "",
        alignItems: "",
        gridTemplateColumns: "2",
        gridColumnGap: "",
        gridRowGap: "",
      },
      name: "wrapper1",
      namePrivate: "Wrapper",
      id: "f83db156-ebb0-40dc-a98d-1199c8b75c54",
      modules: [],
      scrollable: "false",
    },
  ],
  uncommonHeader: {},
  uncommonFooter: {},
};

export const PROJECT_INFO_DEFAULT = {
  id: 0,
  uid: "",
  name: "",
  miniature: null,
  statusAccess: true,
  layout: "{}",
  createdAt: "",
  updatedAt: "",
};
export const TARGET_DEFAULT: SubModules & { changeOptions: ChangeOptions } = {
  changeOptions: ({ options, name }: ChangeOptionsProp) => console.log(""),
  namePrivate: "",
  id: "",
  name: "",
  options: {},
  modules: [],
};
