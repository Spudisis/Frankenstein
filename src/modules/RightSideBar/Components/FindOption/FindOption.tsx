import React from "react";
import { Module } from "../../../../store/Application";
import { ReactElement } from "react";
import { HeaderFooterOptions } from "../../../../components/";
import { observer } from "mobx-react-lite";
import App from "../../../../store/Application";
import { Button } from "../../../../ModulesConstructor";
import { ButtonOptions } from "../../../../components/ButtonOptions/ButtonOptions";

// type PropOptions = Pick<Module, "options" | "id" | "name" | "namePrivate">;
export const FindOption = observer(() => {
  const target = App.target;
  const [masOptions, setMasOptions] = React.useState<ReactElement[]>([]);
  const idHeader = App.ApplicationHeader.id;
  const idFooter = App.ApplicationFooter.id;
  React.useEffect(() => {
    const mas = [];
    if (target.id === idHeader || target.id === idFooter) {
      mas.push(
        <HeaderFooterOptions
          key={target.id}
          namePrivate={target.namePrivate}
          options={target.options}
          name={target.name}
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
          parent={target.parent}
        />
      );
    }
    setMasOptions(mas);
  }, [target]);

  return <div>{masOptions.length !== 0 ? masOptions : "отсутствуют настройки"}</div>;
});
