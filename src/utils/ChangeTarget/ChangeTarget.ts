import App from "src/store/Application";
import { ChangeTargetType, SectionEnum } from "src/domains";

export const changeTarget = ({ obj, changeOptions }: ChangeTargetType) => {
  App.setTarget({ obj, changeOptions });

  if (App.section === SectionEnum.options) return;
  App.changeSection(SectionEnum.options);
};
