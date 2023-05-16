import React from "react";

import { ReactElement } from "react";
import { HFOptions, ButtonOptions, WrapperOptions } from "../Options";
import { observer } from "mobx-react-lite";
import App from "src/store/Application";

export const FindOption = observer(() => {
  const target = App.target;

  const [masOptions, setMasOptions] = React.useState<ReactElement[]>([]);
  const idHeader = App.ApplicationHeader.id;
  const idFooter = App.ApplicationFooter.id;
  React.useEffect(() => {
    console.log(target);
  }, [target]);
  React.useEffect(() => {
    if (!target.id) {
      return;
    }
    console.log(target);
    const mas: ReactElement[] = [];
    //на этом этапе уже имя меняется

    if (target.id === idHeader || target.id === idFooter) {
      mas.push(
        <HFOptions
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
          ParentParent={target.ParentParent || ''}
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
          parent={target.parent}
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
