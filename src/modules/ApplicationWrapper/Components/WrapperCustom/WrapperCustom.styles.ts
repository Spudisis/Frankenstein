import { Option } from "src/domains";
import styled, { css } from "styled-components";

export const WrapperStyledDiv = styled.div<Option>`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  border: ${(props) => props.border || "1px solid black"};
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
          justify-content: ${(props: Option) => props.JustifyContent || ""};
          align-items: ${(props: Option) => props.AlignItems || ""};
        `
      : display === "grid"
      ? css`
          grid-template-columns: ${(props: Option) =>
            //2-5
            props.GridTemplateColumns || "repeat(2, 1fr)"};
          grid-column-gap: 10px;
          grid-template-rows: ${(props: Option) =>
            props.GridTemplateRows || "auto"};
        `
      : ""}
`;
