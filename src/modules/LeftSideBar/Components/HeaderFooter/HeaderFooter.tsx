import { observer } from "mobx-react-lite";

import {
  FHObject,
  Module,
  ParentElem,
  typeFH,
} from "../../../../domains/ApplicationTypes";
import { Details } from "../../../../UI";

type Props = {
  data: FHObject;
  handleChangeTarget: (obj: Module, parent: ParentElem) => void;
  target: Module & ParentElem;
};

export const HeaderFooter = observer(
  ({ data, handleChangeTarget, target }: Props) => {
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
            {data.modules &&
              data.modules.length !== 0 &&
              data.modules.map((module: Module | undefined) => {
                if (typeof module !== "undefined") {
                  console.log(data.namePrivate);
                  return (
                    <Details
                      namePrivate={module.namePrivate}
                      active={module.id === target.id}
                      id={module.id}
                      name={module.name}
                      key={module.id}
                      click={handleChangeTarget}
                      options={module.options}
                      last={true}
                      parent={
                        data.namePrivate === "Footer"
                          ? typeFH.Footer
                          : typeFH.Header
                      }
                      nesting={1}
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
  }
);
