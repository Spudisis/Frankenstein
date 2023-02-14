import React from "react";
import styled from "styled-components";
import { PropDrag } from "../../components/CustomDNDHook";

import { ChildrenProp } from "../ChildrenProp";

export const HeaderMobile = ({ children, refDrag }: ChildrenProp & PropDrag) => {
  return <StyledHeaderMobile ref={refDrag}>{children}</StyledHeaderMobile>;
};

const StyledHeaderMobile = styled.div`
  position: sticky;
  top: 0px;
  left: 0px;
  width: 100%;
`;
