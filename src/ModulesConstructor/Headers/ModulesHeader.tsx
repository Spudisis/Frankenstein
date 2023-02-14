import React from "react";
import { CustomDNDHook } from "../../components";
import { Module, ScreenMas, typeFH } from "../../store/Application";
import { Button } from "../Buttons/Button";

export const HeaderBlocks = ({ modules }: Pick<ScreenMas, "modules">) => {
  const parent = typeFH.Header;
  return (
    <div>
      {modules &&
        modules.map((elem: Module | undefined) => {
          if (typeof elem !== "undefined" && elem.namePrivate === "Button") {
            return <Button elem={elem} key={elem.id} options={elem.options} parent={parent} />;
          }
        })}
    </div>
  );
};
