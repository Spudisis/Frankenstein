import React from "react";
import { observer } from "mobx-react-lite";
import { Input } from "../Input";
import { Module, ChangeOptions, SubModules } from "src/domains";
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

type HFStyles = Pick<
  TypesStyles,
  | "nameModule"
  | "height"
  | "backgroundColor"
  | "display"
  | "justifyContent"
  | "alignItems"
  | "gridColumnGap"
  | "gridTemplateColumns"
  | "gridRowGap"
  | "border"
  | "flexDirection"
>;

export const HFOptions = observer(
  ({
    options,
    name,
    namePrivate,
    id,
    changeOptions,
    modules,
  }: Pick<SubModules, 'modules' | "options" | "name" | "namePrivate" | "id"> &
    ChangeOptions) => {
    const [styles, setStyles] = React.useState<HFStyles>({
      nameModule: name ? name : "",
      height: options.height ? options.height : "auto",
      backgroundColor: options.backgroundColor ? options.backgroundColor : "",
      border: options.border ? options.border : "none",
      display: options.display ? options.display : "",
      justifyContent: options.justifyContent ? options.justifyContent : "",
      alignItems: options.alignItems ? options.alignItems : "",
      flexDirection: options.flexDirection ? options.flexDirection : "row",
      gridTemplateColumns: options.gridTemplateColumns
        ? options.gridTemplateColumns
        : "",
      gridColumnGap: options.gridColumnGap ? options.gridColumnGap : "",
      gridRowGap: options.gridRowGap ? options.gridRowGap : "",
    });

    React.useEffect(() => {
      changeOptions({
        options: styles,
        name: styles.nameModule,
      });
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
        <Input<HFStyles>
          label="Название:"
          value={styles}
          onChange={ChangeStyles}
          property="nameModule"
          typeInput="text"
        />
        <Input<HFStyles>
          label="Высота:"
          value={styles}
          onChange={ChangeStyles}
          property="height"
          typeInput="text"
        />
        <Input<HFStyles>
          label="Бордер:"
          value={styles}
          onChange={ChangeStyles}
          property="border"
          typeInput="text"
        />
        <InputColorWheel<HFStyles>
          label="Цвет фона:"
          value={styles}
          onChange={ChangeStyles}
          property="backgroundColor"
        />
        <InputDisplay<HFStyles>
          value={styles}
          onChange={ChangeStyles}
          property="display"
        />
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
            <Input<HFStyles>
              label="Отступ между колонками:"
              value={styles}
              onChange={ChangeStyles}
              property="gridColumnGap"
              typeInput="text"
            />
            <Input<HFStyles>
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
  }
);
