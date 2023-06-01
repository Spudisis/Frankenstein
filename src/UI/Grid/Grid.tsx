import React from 'react'
import styled, { keyframes } from 'styled-components'
import { type ChildrenProp } from '../ChildrenProp'

interface GridProp {
  columns?: string
  columnGap?: string
  rows?: string
  rowGap?: string
  open?: boolean
}

export const Grid = ({ children, columns, columnGap, rows, rowGap, open = true }: ChildrenProp & GridProp) => {
  return (
    <GridStyled columns={columns} columnGap={columnGap} rows={rows} rowGap={rowGap}>
      {children}
    </GridStyled>
  )
}

const GridStyled = styled.div<GridProp>`
  display: grid;

  grid-template-columns: ${(props) => props.columns || 'repeat(3, 1fr)'};
  grid-template-rows: ${(props) => props.rows || 'auto'};
  grid-column-gap: ${(props) => props.columnGap || '0px'};
  grid-row-gap: ${(props) => props.rowGap || '0px'};
  margin: 10px 0px;
  align-items: center;
`
