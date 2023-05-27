import React from "react";

import { Module, ChangeOptions, SubModules } from "src/domains";

import { Input } from "../Input";
import { TypesStyles } from "../Options.types";
import { InputColorWheel } from "../InputColorWheel";
import { InputDisplay } from "../InputDisplay";
import { SelectInput } from "../SelectInput";
import {
  OptionFlexDirection,
  OptionsAlign,
  OptionsGridColumns,
  OptionsJustify,
} from "../Options.constant";
import App from "src/store/Application";

type WrapperStyles = Omit<TypesStyles, "name" | "fontSize" | "actions">;

export const WrapperOptions = ({
  options,
  name,
  namePrivate,
  id,
  changeOptions,
  modules,
}: Pick<SubModules, "modules" | "options" | "name" | "namePrivate" | "id"> &
  ChangeOptions) => {
  const [styles, setStyles] = React.useState<WrapperStyles>({
    color: options.color ? options.color : "black",
    nameModule: name ? name : "",
    borderRadius: options.borderRadius ? options.borderRadius : "5px",
    height: options.height ? options.height : "auto",
    backgroundColor: options.backgroundColor ? options.backgroundColor : "",
    padding: options.padding ? options.padding : "2px",
    margin: options.margin ? options.margin : "0px",
    width: options.width ? options.width : "auto",
    border: options.border ? options.border : "none",
    display: options.display ? options.display : "",
    flexDirection: options.flexDirection ? options.flexDirection : "row",
    justifyContent: options.justifyContent ? options.justifyContent : "",
    alignItems: options.alignItems ? options.alignItems : "",
    gridTemplateColumns: options.gridTemplateColumns
      ? options.gridTemplateColumns
      : "",
    gridColumnGap: options.gridColumnGap ? options.gridColumnGap : "",
    gridRowGap: options.gridRowGap ? options.gridRowGap : "",
  });

  React.useEffect(() => {
    changeOptions({ options: styles, name: styles.nameModule });
    App.setTarget(
      { options: styles, name: styles.nameModule, namePrivate, id, modules },
      { changeOptions }
    );
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
        label="Бордер:"
        value={styles}
        onChange={ChangeStyles}
        property="border"
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
      {styles.display === "flex" && (
        <>
          <SelectInput
            value={styles}
            onChange={ChangeStyles}
            label="justify"
            property="justifyContent"
            options={OptionsJustify}
          />
          <SelectInput
            value={styles}
            onChange={ChangeStyles}
            label="align"
            property="alignItems"
            options={OptionsAlign}
          />
          <SelectInput
            value={styles}
            onChange={ChangeStyles}
            label="direction"
            property="flexDirection"
            options={OptionFlexDirection}
          />
        </>
      )}
      {styles.display === "grid" && (
        <>
          <SelectInput
            value={styles}
            onChange={ChangeStyles}
            label="columns"
            property="gridTemplateColumns"
            options={OptionsGridColumns}
          />
          <Input<WrapperStyles>
            label="Отступ между колонками:"
            value={styles}
            onChange={ChangeStyles}
            property="gridColumnGap"
            typeInput="text"
          />
          <Input<WrapperStyles>
            label="Отступ между строчками:"
            value={styles}
            onChange={ChangeStyles}
            property="gridRowGap"
            typeInput="text"
          />
        </>
      )}
    </>
  );
};
