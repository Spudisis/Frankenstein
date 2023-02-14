import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import styled from "styled-components";
import { ChildrenProp } from "../ChildrenProp";
import { Button } from "../Button/Button";
import { ParentElem, typeFH } from "../../store/Application";

type PropDetails = {
  name: string;
  options: prop;
  last?: boolean;
  id?: string;
  namePrivate: string;
  click: (p: prop) => void;
};

type prop = any;

export const Details = ({
  children,
  name,
  click,
  options,
  last,
  id,
  parent,
  namePrivate,
}: Partial<ChildrenProp> & PropDetails & ParentElem) => {
  const [open, setOpen] = React.useState(true);

  const handleOpen = (open: boolean) => {
    setOpen(!open);
  };

  const handleSetTarget = () => {
    click({ options, name, id, namePrivate, parent });
  };

  return (
    <DetailsStyled>
      <ElementHead>
        {!last && (
          <Button changeProp={handleOpen} name="" prop={open} width="auto" fontSize="16px" padding="3px">
            {open ? <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus} />}
          </Button>
        )}
        <Button
          changeProp={handleSetTarget}
          name={name}
          prop=""
          fontSize="inherit"
          width="auto"
          paddingLeft={last ? "20px" : ""}
        ></Button>
      </ElementHead>

      <div>{open && children}</div>
    </DetailsStyled>
  );
};

const DetailsStyled = styled.div`
  font-size: 14px;
  width: 100%;
  cursor: pointer;
  position: relative;
  padding: initial;
  & > div {
    padding-left: 20px;
  }
`;

const ElementHead = styled.div`
  display: flex;

  width: 100%;
  padding: 5px;
  border-bottom: 1px solid black;
`;
