import React from "react";

import {
  FHObject,
  Module,
  Modules,
  ParentParent,
  SubModules,
} from "src/domains/ApplicationTypes";
import { Button } from "../Elements";
import { PropsDNDHook } from "src/components/CustomDragNDrop/CustomDNDHook";
import App from "src/store/Application";

import update from "immutability-helper";
import { WrapperCustom } from "../WrapperCustom";

export const FindComponent = ({
  modules,
  parent,
  ParentParent,
}: { modules: Module[] | SubModules[] } & Pick<PropsDNDHook, "parent"> &
  Pick<ParentParent, "ParentParent">) => {
  const FindIndex = React.useCallback(
    (id: string) => {
      if (!modules) {
        throw new Error("Нет скрина или модуля");
      }

      const card = modules.filter(
        (c: Module | undefined) => typeof c !== "undefined" && c.id === id
      )[0];
      if (card) {
        return {
          card,
          index: modules.indexOf(card),
          id,
        };
      }

      return null;
    },
    [modules, parent]
  );

  const MoveCardFunc = React.useCallback(
    ({
      draggedId,
      originalIndex,
    }: {
      draggedId: string;
      originalIndex: number;
    }) => {
      const cardNIndex = FindIndex(draggedId);

      if (cardNIndex) {
        const { card, index, id } = cardNIndex;

        const newModules = update(modules, {
          $splice: [
            [index, 1],
            [originalIndex, 0, card],
          ],
        });
        // console.log("what:" + JSON.stringify(newModules));
        App.changePositionBlock(newModules, parent, ParentParent, id);
      }
      return null;
    },
    [FindIndex, modules, parent, ParentParent]
  );

  return (
    <div>
      {modules &&
        modules.map((elem: Module | SubModules | undefined) => {
          if (typeof elem !== "undefined") {
            if (elem.namePrivate === "Wrapper") {
              const obj = elem as SubModules;
              return (
                <WrapperCustom
                  elem={obj}
                  MoveCardFunc={MoveCardFunc}
                  FindIndex={FindIndex}
                  key={elem.id}
                  parent={parent}
                />
              );
            }
            if (elem.namePrivate === "Button") {
              return (
                <Button
                  MoveCardFunc={MoveCardFunc}
                  FindIndex={FindIndex}
                  elem={elem}
                  key={elem.id}
                  parent={parent}
                  ParentParent={ParentParent}
                />
              );
            }
          }
        })}
    </div>
  );
};
