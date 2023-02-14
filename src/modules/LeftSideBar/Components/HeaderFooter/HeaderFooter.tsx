import { observer } from "mobx-react-lite";
import React from "react";
import { FHObject, Module, ScreenMas, typeFH } from "../../../../store/Application";
import { Details } from "../../../../UI";

type Props = {
  data: FHObject;
  handleChangeTarget: (obj: Module) => void;
};

export const HeaderFooter = observer(({ data, handleChangeTarget }: Props) => {
  return (
    <>
      <Details
        namePrivate={data.namePrivate ? data.namePrivate : "Нет namePrivate"}
        name={data.name ? data.name : "Нет name"}
        click={handleChangeTarget}
        options={data.options}
        last={data.modules && data.modules.length !== 0 ? false : true}
        id={data.id}
      >
        <>
          {data.modules &&
            data.modules.length !== 0 &&
            data.modules.map((module: Module | undefined) => {
              if (typeof module !== "undefined") {
                console.log(data.namePrivate);
                return (
                  <Details
                    namePrivate={module.namePrivate}
                    id={module.id}
                    name={module.name}
                    key={module.id}
                    click={handleChangeTarget}
                    options={module.options}
                    last={true}
                    parent={data.namePrivate === "Footer" ? typeFH.Footer : typeFH.Header}
                  >
                    <></>
                  </Details>
                );
              }
            })}
        </>
      </Details>
    </>
  );
});
