import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import styled from "styled-components";
import { ChildrenProp } from "../ChildrenProp";
import { Button } from "../Button/Button";
import { Module, ParentElem, typeFH } from "../../domains/ApplicationTypes";

type PropDetails = {
  name: string;
  options: prop;
  last?: boolean;
  id?: string;
  namePrivate: string;
  click: (obj: Module, parent: ParentElem) => void;
};

type prop = any;

type PropStyled = {
  nesting: number;
  active?: boolean;
};

export const Details = ({
  children,
  name,
  click,
  options,
  last,
  id,
  parent,
  namePrivate,
  active,
  nesting,
}: Partial<ChildrenProp> & PropDetails & ParentElem & PropStyled) => {
  const [open, setOpen] = React.useState(true);

  const handleOpen = (open: boolean) => {
    setOpen(!open);
  };

  const handleSetTarget = () => {
    if (id) {
      return click({ options, name, id, namePrivate }, { parent });
    }
  };

  return (
    <DetailsStyled>
      <ElementHead nesting={nesting} active={active}>
        {!last && (
          <Button
            changeProp={handleOpen}
            name=""
            prop={open}
            width="auto"
            fontSize="14px"
            padding="2px 10px 2px 10px"
            background="inherit"
          >
            {open ? (
              <FontAwesomeIcon icon={faMinus} />
            ) : (
              <FontAwesomeIcon icon={faPlus} />
            )}
          </Button>
        )}
        <Button
          left={true}
          changeProp={handleSetTarget}
          name={name}
          padding={"2px 10px 2px 0px"}
          prop=""
          height="100%"
          fontSize="inherit"
          width="100%"
          paddingLeft={last ? "20px" : ""}
          background="inherit"
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
`;

const ElementHead = styled.div<PropStyled>`
  display: flex;

  width: 100%;
  padding: 0px 5px;
  padding-left: ${(props) =>
    props.nesting ? props.nesting * 30 + "px" : "0px"};

  ${(props) =>
    props.active
      ? "border: 1px solid #adadad"
      : "border: 1px solid rgba(255,255,255,0)"};
  /* @media screen and (hover: hover) {
    :hover {
      border: 1px solid #adadad;
    }
  } */
`;
