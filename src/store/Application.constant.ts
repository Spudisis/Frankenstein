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
export const SCREEN_DEFAULT = [
  {
    name: "new screen",
    namePrivate: "screen",
    id: DEFAULT_ID,
    options: {},
    modules: [],
  },
];

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
export const TARGET_DEFAULT = {
  parent: "",
  ParentParent: "",
  namePrivate: "",
  id: "",
  name: "",
  options: {},
};