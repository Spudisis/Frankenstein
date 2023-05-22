import React from "react";
import { observer } from "mobx-react-lite";
import { Input } from "../Input";
import App from "src/store/Application";
import { Module, typeFH } from "src/domains/ApplicationTypes";
import { CustomHook } from "src/modules/RightSideBar/Components/Options/Input/CustomHook";
import { TypesStyles } from "../Options.types";
import { InputColorWheel } from "../InputColorWheel";
import { InputDisplay } from "../InputDisplay";

export const HFOptions = observer(
  ({
    options,
    name,
    namePrivate
  }: Pick<Module, "options" | "name" | "namePrivate">) => {
    const FH = namePrivate === "Header" ? typeFH.Header : typeFH.Footer;

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
      display: options.display ? options.display : ""
    });

    React.useEffect(() => {
      const { height, backgroundColor, display } = styles;
      App.changeOptionHeaderFooter(FH, { height, backgroundColor, display });
    }, [styles]);

    React.useEffect(() => {
      const name = styles.nameModule;
      App.changeName(FH, name);
    }, [styles.nameModule]);

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
          label="Высота:"
          value={styles}
          onChange={ChangeStyles}
          property="height"
          typeInput="text"
        />
        <InputColorWheel
          label="Цвет фона:"
          value={styles}
          onChange={ChangeStyles}
          property="backgroundColor"
        />
        <InputDisplay
          value={styles}
          onChange={ChangeStyles}
          property="display"
        />
      </>
    );
  }
);
