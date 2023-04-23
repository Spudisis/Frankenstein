import { observer } from "mobx-react-lite";

import React from "react";
import { Input } from "../OptionsInputs";
import App from "../../store/Application";
import { Module, typeFH } from "../../domains/ApplicationTypes";
import { CustomHook } from "../CustomHook";

export const HeaderFooterOptions = observer(
  <_, T>({
    options,
    name,
    namePrivate,
  }: Pick<Module, "options" | "name" | "namePrivate">) => {
    const FH = namePrivate === "Header" ? typeFH.Header : typeFH.Footer;

    const inputName = CustomHook(name ? name : "name");
    const inputHeight = CustomHook(options.height ? options.height : "50px");
    const inputBgcColor = CustomHook(
      options.backgroundColor ? options.backgroundColor : "white"
    );

    React.useEffect(() => {
      App.changeOptionHeaderFooter(FH, { height: inputHeight.value });
    }, [inputHeight]);
    React.useEffect(() => {
      App.changeOptionHeaderFooter(FH, {
        backgroundColor: inputBgcColor.value,
      });
    }, [inputBgcColor]);
    React.useEffect(() => {
      App.changeName(FH, inputName.value);
    }, [inputName]);
    return (
      <>
        <Input label="Название:" input={inputName} typeInput="text" />
        <Input label="Высота:" input={inputHeight} typeInput="text" />
        <Input label="Цвет фона:" input={inputBgcColor} typeInput="text" />
      </>
    );
  }
);
