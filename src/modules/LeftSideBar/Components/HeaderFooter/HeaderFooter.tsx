import { observer } from "mobx-react-lite";
import React from "react";
import { Module, typeFH } from "src/domains/ApplicationTypes";
import { Details } from "src/UI";
import { Props } from "./HeaderFooter.types";
import App from "src/store/Application";
import { LayoutList } from "../LayoutList";

export const HeaderFooter = observer(
  ({ data, handleChangeTarget, target }: Props) => {
    React.useEffect(() => {
      console.log("TARGETHeaderFooter:" + target.name);
    }, [target]);
    return (
      <>
        <Details
          namePrivate={data.namePrivate ? data.namePrivate : "Нет namePrivate"}
          name={data.name ? data.name : "Нет name"}
          click={handleChangeTarget}
          options={data.options}
          active={data.id === target.id}
          last={data.modules && data.modules.length !== 0 ? false : true}
          id={data.id}
          nesting={0}
        >
          <>
            <LayoutList
              target={target}
              subModule={data}
              changeTarget={handleChangeTarget}
              nesting={1}
            />
          </>
        </Details>
      </>
    );
  }
);
