import React, { MouseEvent } from "react";
import { ModalStyled, Wrapper } from "./ModalChooseTargetScreenHF.styles";
import { createPortal } from "react-dom";
import { TestStore } from "../../store";
import { DefaultButton } from "src/UI";

export const ModalChooseTargetScreenHF = () => {
  const ref = React.useRef<HTMLDivElement>(null);

  const onClickModal = (e: MouseEvent<HTMLDivElement>) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      return (TestStore.openModalChooseHFScreen = false);
    }
    return null;
  };

  return (
    <>
      {createPortal(
        <Wrapper onClick={onClickModal}>
          <ModalStyled ref={ref}>
            <div>
              <DefaultButton
                text={"Add to this screen"}
                onClick={() => TestStore.setHFtoThisScreen()}
              />
              <DefaultButton
                text={"Add to all"}
                onClick={() => TestStore.setHFtoAll()}
              />
            </div>
          </ModalStyled>
        </Wrapper>,
        document.body
      )}
    </>
  );
};
