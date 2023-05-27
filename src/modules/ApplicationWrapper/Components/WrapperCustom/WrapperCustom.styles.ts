import { Option } from "src/domains";
import styled, { css } from "styled-components";

export const WrapperStyledDiv = styled.div<Option>`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  border: ${(props) => props.border || "none"};
  outline: none;
  border-radius: ${(props) => props.borderRadius || "5px"};
  color: ${(props) => props.color || "black"};
  background-color: ${(props) => props.backgroundColor || "white"};
  padding: ${(props) => props.padding || "2px"};
  margin: ${(props) => props.margin || "0px"};
  display: ${(props) => props.display || "block"};
  ${({ display }) =>
    display === "flex"
      ? css`
          justify-content: ${(props: Option) => props.justifyContent || ""};
          align-items: ${(props: Option) => props.alignItems || ""};
          flex-direction: ${(props:Option)=> props.flexDirection || 'row'};
        `
      : display === "grid"
      ? css`
          grid-template-columns: ${(props: Option) =>
            props.gridTemplateColumns
              ? `repeat(${props.gridTemplateColumns}, 1fr)`
              : "repeat(1, 1fr)"};
          grid-column-gap: ${(props: Option) =>
            //2-5
            props.gridColumnGap || "0px"};
          grid-row-gap: ${(props: Option) =>
            //2-5
            props.gridRowGap || "0px"};
        `
      : ""}
`;
