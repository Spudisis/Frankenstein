import { observer } from "mobx-react-lite";
import React from "react";
import { Module, typeFH } from "../../../../store/Application";
import { Details } from "../../../../UI";

type Props = {
  data: any;
  handleChangeTarget: (obj: Module) => void;
};

export const HeaderFooter = observer(({ data, handleChangeTarget }: Props) => {
  return (
    <>
      <Details
        namePrivate={data.namePrivate}
        name={data.name}
        click={handleChangeTarget}
        options={data.options}
        last={data.modules.length !== 0 ? false : true}
        id={data.id}
      >
        <>
          {data.modules.length !== 0 &&
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
