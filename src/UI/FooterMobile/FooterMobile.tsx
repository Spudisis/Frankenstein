import React from "react";
import styled from "styled-components";
import { PropDrag } from "../../components/CustomDNDHook";
import { ChildrenProp } from "../ChildrenProp";

export const FooterMobile = ({ children, refDrag }: ChildrenProp & { refDrag: PropDrag }) => {
  return <StyledFooter ref={refDrag}>{children}</StyledFooter>;
};
const StyledFooter = styled.div`
  float: bottom;
  bottom: 0px;
  left: 0px;

  width: 100%;
`;
