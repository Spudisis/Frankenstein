import React from "react";
import {
  ButtonClose,
  Info,
  Modal,
  ModalContent,
} from "./ModalAccessEmail.styles";
import { observer } from "mobx-react-lite";
import { AuthStore } from "src/store/Auth";
import { MouseEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export const ModalAccessEmail = observer(() => {
  const ref = React.useRef<HTMLDivElement>(null);

  const handleCloseModal = () => {
    AuthStore.modal = false;
  };

  function handleClickOutside(event: MouseEvent<HTMLDivElement>) {
    const refBlock = ref.current;
    const target = event.target as HTMLElement;
    if (!(refBlock && refBlock.contains(target))) {
      handleCloseModal();
    }
  }

  return (
    <Modal onClick={handleClickOutside}>
      <ModalContent ref={ref}>
        <ButtonClose onClick={handleCloseModal}>
          <FontAwesomeIcon icon={faXmark} />
        </ButtonClose>
        <Info>
          Вы зарегистрированы, проверьте почту для подтверждения:{" "}
          {AuthStore.user.email}
        </Info>
      </ModalContent>
    </Modal>
  );
});
