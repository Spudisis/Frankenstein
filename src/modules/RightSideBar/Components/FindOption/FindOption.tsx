import React from "react";

import { ReactElement } from "react";
import {
  HFOptions,
  ButtonOptions,
  WrapperOptions,
  TextOptions,
  ScreenOptions,
} from "../Options";
import { observer } from "mobx-react-lite";
import App from "src/store/Application";

export const FindOption = observer(() => {
  const target = App.target;
  if (target.namePrivate === "newScreen") {
    console.log(target.namePrivate);
  }
  const [masOptions, setMasOptions] = React.useState<ReactElement[]>([]);
  const idHeader = App.ApplicationHeader.id;
  const idFooter = App.ApplicationFooter.id;

  React.useEffect(() => {
    if (!target.id) {
      return setMasOptions([]);
    }

    const mas: ReactElement[] = [];

    if (target.id === idHeader || target.id === idFooter) {
      mas.push(
        <HFOptions
          key={target.id}
          namePrivate={target.namePrivate}
          options={target.options}
          name={target.name}
          id={target.id}
          changeOptions={target.changeOptions}
        />
      );
    }
    if (target.namePrivate === "Button") {
      mas.push(
        <ButtonOptions
          key={target.id}
          options={target.options}
          id={target.id}
          name={target.name}
          namePrivate={target.namePrivate}
          changeOptions={target.changeOptions}
        />
      );
    }
    if (target.namePrivate === "Text") {
      mas.push(
        <TextOptions
          key={target.id}
          options={target.options}
          id={target.id}
          name={target.name}
          namePrivate={target.namePrivate}
          changeOptions={target.changeOptions}
        />
      );
    }
    if (target.namePrivate === "Wrapper") {
      mas.push(
        <WrapperOptions
          key={target.id}
          options={target.options}
          id={target.id}
          name={target.name}
          namePrivate={target.namePrivate}
          changeOptions={target.changeOptions}
        />
      );
    }
    if (target.namePrivate === "newScreen") {
      mas.push(
        <ScreenOptions
          key={target.id}
          options={target.options}
          id={target.id}
          name={target.name}
          namePrivate={target.namePrivate}
          changeOptions={target.changeOptions}
        />
      );
    }
    setMasOptions(mas);
  }, [target]);

  return (
    <div>
      {masOptions.length !== 0 && target.id
        ? masOptions
        : "отсутствуют настройки"}
    </div>
  );
});
