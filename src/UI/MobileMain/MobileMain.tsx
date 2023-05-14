import React from "react";
import styled from "styled-components";
import { PropDrag } from "../../components/CustomDragNDrop/CustomDNDHook";
import { ChildrenProp } from "../ChildrenProp";

export const MobileMain = ({
  children,
  refDrag,
}: ChildrenProp & { refDrag: PropDrag }) => {
  return <MobileMainStyled ref={refDrag}>{children}</MobileMainStyled>;
};

const MobileMainStyled = styled.div`
  overflow-x: auto;
  height: 100%;
  width: 100%;
`;
