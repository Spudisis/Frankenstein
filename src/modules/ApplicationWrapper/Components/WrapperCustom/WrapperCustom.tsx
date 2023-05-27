import React from "react";
import {
  ScreenAddElemeny,
  Module,
  SubModules,
  Modules,
  ChangeOptionsProp,
  DeleteFuncType,
} from "src/domains";
import { FindComponent } from "../FindComponent/FindComponent";
import { WrapperStyledDiv } from "./WrapperCustom.styles";
import { WrapperCustomT } from "./WrapperCustom.types";
import { useDrag, useDrop } from "react-dnd";
import { DropDND } from "src/components/CustomDragNDrop/CustomDNDHook.types";
import { changeTarget } from "src/components";
import Application from "src/store/Application";
import { ChangeLayoutModule } from "src/utils";
import { TestStore } from "../../store";
import { CustomDragHook } from "../customDragHook";
import { CustomDropHook } from "../customDropHook";
import { ItemTypesDNDPictures } from "src/constants";

export const WrapperCustom = ({
  elem,
  MoveCardFunc,
  FindIndex,
  parent,
  newModules,
  deleteItemFunc,
}: WrapperCustomT & {
  newModules: (modules: any) => void;
  deleteItemFunc: DeleteFuncType;
}) => {
  const { options, modules, id } = elem;
  const module = modules as Module[];

  const handleSetTarget = (e: MouseEvent) => {
    const { options, id, namePrivate, name, modules } = elem;
    changeTarget({
      obj: { options, name, id, namePrivate, modules },
      changeOptions,
    });
    e.stopPropagation();
  };

  const { isDragging, drag } = CustomDragHook({
    elem,
    parent,
    FindIndex,
    MoveCardFunc,
    typeDrag: "Wrapper",
    deleteItemFunc,
  });

  const dropFunc = (item: ScreenAddElemeny) => {
    TestStore.test = item.id;
    ChangeLayoutModule({ item, id: String(parent), parent: elem.id });
  };

  const { drop } = CustomDropHook({
    dropFunc,
    MoveCardFunc,
    elem,
    FindIndex,
    ItemAccess: [
      ItemTypesDNDPictures.PicturesButton,
      ItemTypesDNDPictures.PicturesWrapper,
      ItemTypesDNDPictures.PicturesText,
    ],
  });

  const changeOptions = ({ options, name }: ChangeOptionsProp) => {
    const newElem = {
      ...elem,
      name: name ? name : elem.name,
      options: options ? options : elem.options,
    };
    newModules(newElem);
  };

  const changeModules = (newEl: SubModules[] | Modules) => {
    const newElem = {
      ...elem,

      modules: newEl,
    };
    newModules(newElem);
  };

  return (
    <>
      <WrapperStyledDiv
        ref={(node: HTMLButtonElement) => drag(drop(node))}
        isDragging={isDragging}
        {...options}
        onClick={(e: MouseEvent) => handleSetTarget(e)}
      >
        {/* <div ref={dropMain}> */}
        <FindComponent
          modules={module}
          parent={parent as string}
          ParentParent={id}
          changeModules={changeModules}
        />
        {/* </div> */}
      </WrapperStyledDiv>
    </>
  );
};
