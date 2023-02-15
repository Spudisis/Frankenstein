import React from "react";
import { CustomDNDHook } from "../../../../components";
import { FHObject, Module, typeFH } from "../../../../store/Application";
import { Button } from "../../../../ModulesConstructor/Buttons/Button";
import { PropsDNDHook } from "../../../../components/CustomDragNDrop/CustomDNDHook";

export const FindComponent = ({ modules, parent }: Pick<FHObject, "modules"> & Pick<PropsDNDHook, "parent">) => {
  return (
    <div>
      {modules &&
        modules.map((elem: Module | undefined) => {
          if (typeof elem !== "undefined") {
            if (elem.namePrivate === "Button") {
              return <Button elem={elem} key={elem.id} parent={parent} />;
            }
          }
        })}
    </div>
  );
};
