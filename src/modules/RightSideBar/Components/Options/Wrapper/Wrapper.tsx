import React from "react";

import { Module, ChangeOptions } from "src/domains";

import { Input } from "../Input";
import { TypesStyles } from "../Options.types";
import { InputColorWheel } from "../InputColorWheel";
import { InputDisplay } from "../InputDisplay";

type WrapperStyles = Omit<TypesStyles, "name">;

export const WrapperOptions = ({
  options,
  name,
  namePrivate,
  id,
  changeOptions,
}: Pick<Module, "options" | "name" | "namePrivate" | "id"> & ChangeOptions) => {
  const [styles, setStyles] = React.useState<WrapperStyles>({
    color: options.color ? options.color : "black",
    nameModule: name ? name : "",
    borderRadius: options.borderRadius ? options.borderRadius : "5px",
    height: options.height ? options.height : "auto",
    backgroundColor: options.backgroundColor ? options.backgroundColor : "",
    padding: options.padding ? options.padding : "2px",
    margin: options.margin ? options.margin : "0px",
    width: options.width ? options.width : "auto",
    display: options.display ? options.display : "",
  });

  React.useEffect(() => {
    changeOptions({ options: styles, name: styles.nameModule });
  }, [changeOptions, styles]);

  const ChangeStyles = <T,>(value: T[keyof T], property: keyof T) => {
    setStyles({ ...styles, ...{ [property]: value } });
  };

  return (
    <>
      <Input<WrapperStyles>
        label="Название:"
        value={styles}
        onChange={ChangeStyles}
        property="nameModule"
        typeInput="text"
      />
      <Input<WrapperStyles>
        label="Высота:"
        value={styles}
        onChange={ChangeStyles}
        property="height"
        typeInput="text"
      />
      <Input<WrapperStyles>
        label="Ширина:"
        value={styles}
        onChange={ChangeStyles}
        property="width"
        typeInput="text"
      />
      <InputColorWheel<WrapperStyles>
        value={styles}
        onChange={ChangeStyles}
        label="Цвет фона"
        property="backgroundColor"
      />
      <Input<WrapperStyles>
        label="Бордер радиус:"
        value={styles}
        onChange={ChangeStyles}
        property="borderRadius"
        typeInput="text"
      />
      <Input<WrapperStyles>
        label="Внутренний отступ:"
        value={styles}
        onChange={ChangeStyles}
        property="padding"
        typeInput="text"
      />

      <Input<WrapperStyles>
        label="Внешний отступ:"
        value={styles}
        onChange={ChangeStyles}
        property="margin"
        typeInput="text"
      />
      <InputColorWheel<WrapperStyles>
        value={styles}
        property="color"
        onChange={ChangeStyles}
        label="Цвет"
      />

      <InputDisplay value={styles} onChange={ChangeStyles} property="display" />
    </>
  );
};
