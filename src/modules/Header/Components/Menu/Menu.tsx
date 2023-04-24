import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ButtonClose, ButtonMenu, Modal, WrapperLinks } from "./Menu.styles";
import { Link } from "react-router-dom";
import { main } from "src/routes/urlsPages";
import { HeaderLogo, Button, Links } from "../index";

export const Menu = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <ButtonMenu onClick={() => setOpen(!open)}>
        <FontAwesomeIcon icon={faBars} />
      </ButtonMenu>
      {open && (
        <Modal>
          <ButtonClose>
            <ButtonMenu onClick={() => setOpen(false)}>
              <FontAwesomeIcon icon={faXmark} />
            </ButtonMenu>
          </ButtonClose>

          <HeaderLogo />
          <WrapperLinks>
            <Link to={main}>
              <Button text={"Main"} />
            </Link>
            <Links />
          </WrapperLinks>
        </Modal>
      )}
    </div>
  );
};
