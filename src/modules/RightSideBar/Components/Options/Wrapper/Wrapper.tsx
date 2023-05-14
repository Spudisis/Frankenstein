import { observer } from "mobx-react-lite";
import React from "react";
import { CustomHook } from "src/components/CustomHook";
import { Module, ParentElem } from "src/domains";
import App from "src/store/Application";
import { Input } from "../Input";

export const WrapperOptions = ({
  options,
  name,
  namePrivate,
  id,
  parent,
}: Pick<Module, "options" | "name" | "namePrivate" | "id"> & ParentElem) => {
  const inputName = CustomHook(name ? name : "name");
  const inputHeight = CustomHook(options.height ? options.height : "auto");
  const inputWidth = CustomHook(options.width ? options.width : "auto");
  const borderRadius = CustomHook(
    options.borderRadius ? options.borderRadius : "5px"
  );
  const color = CustomHook(options.color ? options.color : "green");
  const padding = CustomHook(options.padding ? options.padding : "2px");
  const margin = CustomHook(options.margin ? options.margin : "0px");
  const inputBgcColor = CustomHook(
    options.backgroundColor ? options.backgroundColor : ""
  );

  React.useEffect(() => {
    const name = inputName.value;
    App.findAndChangeNameModules({ parent, id, name });
  }, [inputName]);
  React.useEffect(() => {
    const options = {
      borderRadius: borderRadius.value,
      height: inputHeight.value,
      backgroundColor: inputBgcColor.value,
      padding: padding.value,
      color: color.value,
      margin: margin.value,
      width: inputWidth.value,
    };
    App.findAndChangeOptionModules({ parent, id, options });
  }, [inputHeight, inputBgcColor, borderRadius, padding, color, margin]);

  return (
    <>
      <Input label="Название:" input={inputName} typeInput="text" />

      <Input label="Высота:" input={inputHeight} typeInput="text" />
      <Input label="Ширина:" input={inputWidth} typeInput="text" />
      <Input label="Цвет фона:" input={inputBgcColor} typeInput="text" />
      <Input label="Бордер радиус:" input={borderRadius} typeInput="text" />
      <Input label="Внутренний отступ:" input={padding} typeInput="text" />
      <Input label="Цвет:" input={color} typeInput="text" />
      <Input label="Внешний отступ:" input={margin} typeInput="text" />
    </>
  );
};
