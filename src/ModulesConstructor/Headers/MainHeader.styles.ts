import styled, { css } from "styled-components";

export const HeaderConstructor = styled.div<any>`
  height: ${(props) => (props.height ? props.height : "150px")};
  border-radius: 25px 25px 0px 0px;
  overflow: hidden;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "yellow"};
  display: ${(props) => props.display || "block"};
  ${({ display }) =>
    display === "flex"
      ? css`
          justify-content: ${(props: any) => props.JustifyContent || ""};
          align-items: ${(props: any) => props.AlignItems || ""};
        `
      : display === "grid"
      ? css`
          grid-template-columns: ${(props: any) =>
            props.GridTemplateColumns || "repeat(2, 1fr)"};
          grid-template-rows: ${(props: any) =>
            props.GridTemplateRows || "auto"};
        `
      : ""}
`;
