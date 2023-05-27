import React from "react";
import styled from "styled-components";

import { ChildrenProp } from "../ChildrenProp";
import { ConnectDropTarget } from "react-dnd";

export const MobileMain = ({
  children,
  refDrag,
}: ChildrenProp & { refDrag: ConnectDropTarget }) => {
  return <MobileMainStyled ref={refDrag}>{children}</MobileMainStyled>;
};

const MobileMainStyled = styled.div`
  overflow-x: auto;
  height: 100%;
  width: 100%;
`;
