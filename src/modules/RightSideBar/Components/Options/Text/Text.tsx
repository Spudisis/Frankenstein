import { observer } from "mobx-react-lite";
import React from "react";
import { ChangeOptions, Module } from "src/domains";
import { TypesStyles } from "../Options.types";
import { Input } from "../Input";
import { InputColorWheel } from "../InputColorWheel";
import App from "src/store/Application";
import { SelectInput } from "../SelectInput";
import { OptionAlignText } from "../Options.constant";

type TextStyles = Pick<
  TypesStyles,
  "color" | "nameModule" | "name" | "fontSize" | "textAlign"
>;

export const TextOptions = observer(
  ({
    options,
    name,
    namePrivate,
    id,
    changeOptions,
  }: Pick<Module, "options" | "name" | "namePrivate" | "id"> & {
    changeOptions: ChangeOptions;
  }) => {
    const [styles, setStyles] = React.useState<TextStyles>({
      nameModule: name ? name : "",

      color: options.color ? options.color : "black",
      name: options.name ? options.name : "",
      fontSize: options.fontSize ? options.fontSize : "16px",
      textAlign: options.textAlign ? options.textAlign : "start",
    });

    const ChangeStyles = <T,>(value: T[keyof T], property: keyof T) => {
      setStyles({ ...styles, ...{ [property]: value } });
    };

    React.useEffect(() => {
      changeOptions({ options: styles, name: styles.nameModule });
      //для того тобы актуальный таргет был
      App.setTarget({
        obj: { options: styles, name: styles.nameModule, namePrivate, id },
        changeOptions,
      });
    }, [changeOptions, styles]);

    return (
      <>
        <Input<TextStyles>
          label="Название:"
          value={styles}
          onChange={ChangeStyles}
          property="nameModule"
          typeInput="text"
        />
        <Input<TextStyles>
          label="Текст:"
          value={styles}
          onChange={ChangeStyles}
          property="name"
          typeInput="text"
        />
        <Input<TextStyles>
          label="Шрифт:"
          value={styles}
          onChange={ChangeStyles}
          property="fontSize"
          typeInput="text"
        />
        <InputColorWheel<TextStyles>
          value={styles}
          property="color"
          onChange={ChangeStyles}
          label="Цвет"
        />
        <SelectInput<TextStyles>
          value={styles}
          onChange={ChangeStyles}
          label="Link to screen"
          property="textAlign"
          options={OptionAlignText}
        />
      </>
    );
  }
);
