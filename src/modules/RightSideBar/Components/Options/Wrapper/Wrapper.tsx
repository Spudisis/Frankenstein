import { observer } from "mobx-react-lite";
import React from "react";
import { CustomHook } from "src/modules/RightSideBar/Components/Options/Input/CustomHook";
import { Module, ParentElem, ChangeOptions } from "src/domains";
import App from "src/store/Application";
import { Input } from "../Input";
import { TypesStyles } from "../Options.types";
import { InputColorWheel } from "../InputColorWheel";
import { InputDisplay } from "../InputDisplay";

export const WrapperOptions = ({
  options,
  name,
  namePrivate,
  id,
  changeOptions,
}: Pick<Module, "options" | "name" | "namePrivate" | "id"> & ChangeOptions) => {
  const [styles, setStyles] = React.useState<TypesStyles>({
    color: options.color ? options.color : "black",
    nameModule: name ? name : "",
    borderRadius: options.borderRadius ? options.borderRadius : "5px",
    height: options.height ? options.height : "auto",
    backgroundColor: options.backgroundColor ? options.backgroundColor : "",
    padding: options.padding ? options.padding : "2px",
    margin: options.margin ? options.margin : "0px",
    name: options.name ? options.name : "",
    width: options.width ? options.width : "auto",
    display: options.display ? options.display : "",
  });

  React.useEffect(() => {
    changeOptions({ options: styles, name: styles.nameModule });
  }, [styles]);

  const ChangeStyles = <T extends TypesStyles, K extends keyof T>(
    value: T[K],
    property: K
  ) => {
    setStyles({ ...styles, ...{ [property]: value } });
  };

  return (
    <>
      <Input
        label="Название:"
        value={styles}
        onChange={ChangeStyles}
        property="nameModule"
        typeInput="text"
      />
      <Input
        label="Текст в кнопке:"
        value={styles}
        onChange={ChangeStyles}
        property="name"
        typeInput="text"
      />
      <Input
        label="Высота:"
        value={styles}
        onChange={ChangeStyles}
        property="height"
        typeInput="text"
      />
      <Input
        label="Ширина:"
        value={styles}
        onChange={ChangeStyles}
        property="width"
        typeInput="text"
      />
      <InputColorWheel
        value={styles}
        onChange={ChangeStyles}
        label="Цвет фона"
        property="backgroundColor"
      />
      <Input
        label="Бордер радиус:"
        value={styles}
        onChange={ChangeStyles}
        property="borderRadius"
        typeInput="text"
      />
      <Input
        label="Внутренний отступ:"
        value={styles}
        onChange={ChangeStyles}
        property="padding"
        typeInput="text"
      />

      <Input
        label="Внешний отступ:"
        value={styles}
        onChange={ChangeStyles}
        property="margin"
        typeInput="text"
      />
      <InputColorWheel
        value={styles}
        property="color"
        onChange={ChangeStyles}
        label="Цвет"
      />

      <InputDisplay value={styles} onChange={ChangeStyles} property="display" />
    </>
  );
};
