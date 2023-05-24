import React from "react";
import { observer } from "mobx-react-lite";
import { Input } from "../Input";
import { Module, ChangeOptions } from "src/domains";
import { TypesStyles } from "../Options.types";
import { InputColorWheel } from "../InputColorWheel";
import { InputDisplay } from "../InputDisplay";

type HFStyles = Pick<
  TypesStyles,
  "nameModule" | "height" | "backgroundColor" | "display"
>;

export const HFOptions = observer(
  ({
    options,
    name,
    namePrivate,
    changeOptions,
  }: Pick<Module, "options" | "name" | "namePrivate"> & ChangeOptions) => {
    const [styles, setStyles] = React.useState<HFStyles>({
      nameModule: name ? name : "",
      height: options.height ? options.height : "auto",
      backgroundColor: options.backgroundColor ? options.backgroundColor : "",
      display: options.display ? options.display : "",
    });

    React.useEffect(() => {
      const { height, backgroundColor, display } = styles;
      changeOptions({
        options: { height, backgroundColor, display },
        name: styles.nameModule,
      });
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
      </>
    );
  }
);
