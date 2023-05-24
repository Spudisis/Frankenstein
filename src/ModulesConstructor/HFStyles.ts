import styled, { css } from "styled-components";
import { Option } from "src/domains";
export const HFStyles = styled.div<any>`
  height: ${(props) => (props.height ? props.height : "150px")};

  overflow: hidden;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "yellow"};
  display: ${(props) => props.display || "block"};
  ${({ display }) =>
    display === "flex"
      ? css`
          justify-content: ${(props: Option) => props.justifyContent || ""};
          align-items: ${(props: Option) => props.alignItems || ""};
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
