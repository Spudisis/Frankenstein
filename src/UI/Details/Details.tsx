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
    click({ options, name, id, namePrivate, parent });
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
            fontSize="16px"
            padding="10px"
            background="inherit"
          >
            {open ? <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus} />}
          </Button>
        )}
        <Button
          left={true}
          changeProp={handleSetTarget}
          name={name}
          padding={"10px 0px"}
          margin={"0px 0px 0px 10px"}
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
  padding-left: ${(props) => (props.nesting ? props.nesting * 25 + "px" : "0px")};
  border: 1px solid white;
  ${(props) => (props.active ? "border: 1px solid #adadad" : "")};
  @media screen and (hover: hover) {
    :hover {
      border: 1px solid #adadad;
    }
  }
`;
