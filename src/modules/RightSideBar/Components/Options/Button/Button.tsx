import { observer } from "mobx-react-lite";
import React from "react";
import { Module, ChangeOptions } from "src/domains";
import { Input } from "../Input";
import { InputColorWheel } from "../InputColorWheel";
import { TypesStyles } from "../Options.types";

type ButtonStyles = Omit<
  TypesStyles,
  | "display"
  | "justifyContent"
  | "alignItems"
  | "gridTemplateColumns"
  | "gridColumnGap"
  | "gridRowGap"
>;

export const ButtonOptions = observer(
  ({
    options,
    name,
    namePrivate,
    id,
    changeOptions,
  }: Pick<Module, "options" | "name" | "namePrivate" | "id"> &
    ChangeOptions) => {
    const [styles, setStyles] = React.useState<ButtonStyles>({
      nameModule: name ? name : "",
      borderRadius: options.borderRadius ? options.borderRadius : "5px",
      height: options.height ? options.height : "auto",
      backgroundColor: options.backgroundColor ? options.backgroundColor : "",
      padding: options.padding ? options.padding : "2px",
      color: options.color ? options.color : "black",
      margin: options.margin ? options.margin : "0px",
      name: options.name ? options.name : "",
      width: options.width ? options.width : "auto",
      fontSize: options.fontSize ? options.fontSize : "16px",
    });

    const ChangeStyles = <T,>(value: T[keyof T], property: keyof T) => {
      setStyles({ ...styles, ...{ [property]: value } });
    };

    React.useEffect(() => {
      changeOptions({ options: styles, name: styles.nameModule });
    }, [changeOptions, styles]);

    return (
      <>
        <Input<ButtonStyles>
          label="Название:"
          value={styles}
          onChange={ChangeStyles}
          property="nameModule"
          typeInput="text"
        />
        <Input<ButtonStyles>
          label="Текст в кнопке:"
          value={styles}
          onChange={ChangeStyles}
          property="name"
          typeInput="text"
        />
        <Input<ButtonStyles>
          label="Высота:"
          value={styles}
          onChange={ChangeStyles}
          property="height"
          typeInput="text"
        />
        <Input<ButtonStyles>
          label="Ширина:"
          value={styles}
          onChange={ChangeStyles}
          property="width"
          typeInput="text"
        />
        <InputColorWheel<ButtonStyles>
          value={styles}
          onChange={ChangeStyles}
          label="Цвет фона"
          property="backgroundColor"
        />
        <Input<ButtonStyles>
          label="Бордер радиус:"
          value={styles}
          onChange={ChangeStyles}
          property="borderRadius"
          typeInput="text"
        />
        <Input<ButtonStyles>
          label="Внутренний отступ:"
          value={styles}
          onChange={ChangeStyles}
          property="padding"
          typeInput="text"
        />

        <Input<ButtonStyles>
          label="Внешний отступ:"
          value={styles}
          onChange={ChangeStyles}
          property="margin"
          typeInput="text"
        />
        <Input<ButtonStyles>
          label="Шрифт:"
          value={styles}
          onChange={ChangeStyles}
          property="fontSize"
          typeInput="text"
        />
        <InputColorWheel<ButtonStyles>
          value={styles}
          property="color"
          onChange={ChangeStyles}
          label="Цвет"
        />
      </>
    );
  }
);
