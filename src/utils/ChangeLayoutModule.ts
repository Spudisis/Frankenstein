import { CreateId } from "src/components";
import { Module, ScreenAddElemeny, SubModules } from "src/domains";
import Application from "src/store/Application";

type ChangeLayoutType = {
  item: ScreenAddElemeny;
  id: string;
  parent?: string;
};

export const ChangeLayoutModule = ({ item, id, parent }: ChangeLayoutType) => {
  const changeIdItem =
    item.modules &&
    item.modules.map((elem) => {
      return { ...elem, id: CreateId() };
    });

  const newItem = { ...item, id: CreateId(), modules: changeIdItem } as Module;
  return Application.changeModules({
    item: newItem,
    id: id,
    ParentParent: parent,
    oldId: item.id,
  });
};
