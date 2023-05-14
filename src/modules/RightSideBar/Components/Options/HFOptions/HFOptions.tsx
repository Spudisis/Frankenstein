import React from "react";
import { observer } from "mobx-react-lite";
import { Input } from "../Input";
import App from "src/store/Application";
import { Module, typeFH } from "src/domains/ApplicationTypes";
import { CustomHook } from "src/components/CustomHook";

export const HFOptions = observer(
  ({
    options,
    name,
    namePrivate,
  }: Pick<Module, "options" | "name" | "namePrivate">) => {
    const FH = namePrivate === "Header" ? typeFH.Header : typeFH.Footer;

    //тут хуйня какая-то ебаная, приходят пустые параметры
    const inputName = CustomHook(name ? name : "button");
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
