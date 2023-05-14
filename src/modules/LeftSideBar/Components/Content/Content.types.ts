import { ContentProp } from "src/UI/SideBar/Content/Content";

export type TypeContent = {
  section: boolean;
  setSection: (b: boolean) => void;
} & Pick<ContentProp, "overflow">;
