import React from "react";
import { observer } from "mobx-react-lite";
import { Input } from "../Input";
import { Module, ChangeOptions } from "src/domains";
import { TypesStyles } from "../Options.types";
import { InputColorWheel } from "../InputColorWheel";
import { InputDisplay } from "../InputDisplay";
import { SelectInput } from "../SelectInput";
import {
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
>;

export const HFOptions = observer(
  ({
    options,
    name,
    namePrivate,
    id,
    changeOptions,
  }: Pick<Module, "options" | "name" | "namePrivate" | "id"> &
    ChangeOptions) => {
    const [styles, setStyles] = React.useState<HFStyles>({
      nameModule: name ? name : "",
      height: options.height ? options.height : "auto",
      backgroundColor: options.backgroundColor ? options.backgroundColor : "",
      display: options.display ? options.display : "",
      justifyContent: options.justifyContent ? options.justifyContent : "",
      alignItems: options.alignItems ? options.alignItems : "",
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
        { options: styles, name: styles.nameModule, namePrivate, id },
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
