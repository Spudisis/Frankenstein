import React from "react";
import { CustomDNDHook } from "../../../../components";
import { FHObject, Module, ScreenMas, typeFH } from "../../../../store/Application";
import { Button } from "../../../../ModulesConstructor/Buttons/Button";
import { PropsDNDHook } from "../../../../components/CustomDragNDrop/CustomDNDHook";
import App from "../../../../store/Application";
import { observer } from "mobx-react-lite";
import update from "immutability-helper";

export const FindComponent = ({ modules, parent }: Pick<FHObject, "modules"> & Pick<PropsDNDHook, "parent">) => {
  const FindIndex = React.useCallback(
    (id: string) => {
      if (typeof parent === "string") {
        if (modules) {
          const card = modules.filter((c: Module | undefined) => typeof c !== "undefined" && `${c.id}` === id)[0];
          if (card) {
            return {
              card,
              index: modules.indexOf(card),
            };
          } else {
            throw new Error("Нету такого модуля");
          }
        }
        throw new Error("Нет скрина или модуля");
      }
      return null;
    },
    [modules]
  );

  const MoveCardFunc = React.useCallback(
    ({ draggedId, originalIndex }: any) => {
      const cardNIndex = FindIndex(draggedId);
      if (cardNIndex) {
        const { card, index } = cardNIndex;
        const newModules = update(modules, {
          $splice: [
            [index, 1],
            [originalIndex, 0, card],
          ],
        });
        App.changePositionBlock(newModules, parent);
      }
      return null;
    },
    [FindIndex, modules]
  );

  return (
    <div>
      {modules &&
        modules.map((elem: Module | undefined) => {
          if (typeof elem !== "undefined") {
            if (elem.namePrivate === "Button") {
              return (
                <Button MoveCardFunc={MoveCardFunc} FindIndex={FindIndex} elem={elem} key={elem.id} parent={parent} />
              );
            }
          }
        })}
    </div>
  );
};
