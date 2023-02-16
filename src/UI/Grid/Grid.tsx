import React from "react";
import styled from "styled-components";
import { ChildrenProp } from "../ChildrenProp";

type GridProp = {
  columns?: string;
  columnGap?: string;
  rows?: string;
  rowGap?: string;
};

export const Grid = ({ children, columns, columnGap, rows, rowGap }: ChildrenProp & GridProp) => {
  return (
    <GridStyled columns={columns} columnGap={columnGap} rows={rows} rowGap={rowGap}>
      {children}
    </GridStyled>
  );
};

const GridStyled = styled.div<GridProp>`
  display: grid;
  grid-template-columns: ${(props) => props.columns || "repeat(3, 1fr)"};
  grid-template-rows: ${(props) => props.rows || "auto"};
  grid-column-gap: ${(props) => props.columnGap || "0px"};
  grid-row-gap: ${(props) => props.rowGap || "0px"};
  margin: 10px 0px;
  align-items: center;
`;
